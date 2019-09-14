""" Adds redirects to the pages matched by the given glob pattern, so that they
can be moved somewhere else.

Requires python-frontmatter: https://python-frontmatter.readthedocs.io/en/latest/

Usage (in repository root dir):
    python _scripts/add_redirects.py "docs/foo/bar/**"
"""

import argparse
import os
from glob import iglob

import frontmatter


def add_redirects(files):
    for filepath in iglob(files, recursive=True):
        if not filepath.endswith(".md") or not os.path.isfile(filepath):
            continue

        print(filepath)

        with open(filepath) as f:
            page = frontmatter.loads(f.read())

        redirect_from = page.get("redirect_from", [])
        if type(redirect_from) is not list:
            redirect_from = [redirect_from]

        new_redirect = "/{}/".format(os.path.dirname(filepath))
        if new_redirect not in redirect_from:
            redirect_from.append(new_redirect)

        page["redirect_from"] = redirect_from

        with open(filepath, "wb") as f:
            frontmatter.dump(page, f)
            f.write(b"\n")


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("files", type=str)

    args = parser.parse_args()

    add_redirects(args.files)


if __name__ == "__main__":
    main()
