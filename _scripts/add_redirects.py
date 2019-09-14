""" Adds redirects to the pages matched by the given glob pattern, so that they
can be moved somewhere else.

Requires oyaml: https://github.com/wimglenn/oyaml

Usage (in repository root dir):
    python _scripts/add_redirects.py "docs/foo/bar/**"
"""

import argparse
import os
import re
from glob import iglob

import oyaml as yaml


yaml_delim = r"(?:---|\+\+\+)"
yaml_pattern = r"(.*?)"
content_pattern = r"\s*(.+)$"
re_pattern = r"^\s*" + yaml_delim + yaml_pattern + yaml_delim + content_pattern
regex = re.compile(re_pattern, re.S | re.M)


def add_redirects(files):
    for filepath in iglob(files, recursive=True):
        if not filepath.endswith(".md") or not os.path.isfile(filepath):
            continue

        print(filepath)

        with open(filepath) as f:
            page_string = f.read()

        result = regex.search(page_string)
        frontmatter = yaml.load(result.group(1))
        body = result.group(2)

        redirect_from = frontmatter.get("redirect_from", [])
        if type(redirect_from) is not list:
            redirect_from = [redirect_from]

        new_redirect = "/{}/".format(os.path.dirname(filepath))
        if new_redirect not in redirect_from:
            redirect_from.append(new_redirect)

        frontmatter["redirect_from"] = redirect_from

        page_string = "---\n{}---\n\n{}".format(
            yaml.dump(frontmatter, default_flow_style=False), body
        )

        with open(filepath, "w") as f:
            f.write(page_string)


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("files", type=str)

    args = parser.parse_args()

    add_redirects(args.files)


if __name__ == "__main__":
    main()
