""" Clones, fetches and checks out the repositories of all the CoFH mods. The
repositories are placed in the "_modrepos" directory.

Usage (in repository root dir):
    python _scripts/checkout.py
"""

import os
import sys
from subprocess import Popen, PIPE
from threading import Thread


REPOS = [
    "RedstoneFlux",
    "CoFHCore",
    "CoFHWorld",
    "ThermalFoundation",
    "ThermalExpansion",
    "ThermalDynamics",
    "ThermalCultivation",
    "ThermalInnovation",
    "RedstoneArsenal",
    "VanillaTools",
    "VanillaSatchels",
]


def main():
    print("\nFetching repositories...")

    repos_path = os.path.abspath(os.path.join(os.getcwd(), '_modrepos'))
    os.makedirs(repos_path, exist_ok=True)

    def fetch(repo):
        repo_path = os.path.join(repos_path, repo)

        if not os.path.isdir(repo_path):
            Popen(
                ["git", "clone", "git@github.com:CoFH/{}.git".format(repo)],
                cwd=repos_path,
            ).wait()
        else:
            Popen(["git", "fetch"], cwd=repo_path).wait()

        sys.stdout.write("- {}\n".format(repo))

    threads = [Thread(target=fetch, args=(repo,)) for repo in REPOS]

    for t in threads:
        t.start()

    for t in threads:
        t.join()

    for repo in REPOS:
        print("")

        cwd = os.path.join(repos_path, repo)

        current_commit_id = (
            Popen(["git", "rev-parse", "--short", "HEAD"], stdout=PIPE, cwd=cwd)
            .communicate()[0]
            .strip()
            .decode("utf-8")
        )

        while True:
            commit_id = input("Commit ID for {} ({}): ".format(repo, current_commit_id))
            if commit_id == "":
                break

            print("Checking out {}...".format(commit_id))
            git_checkout = Popen(
                ["git", "-c", "advice.detachedHead=false", "checkout", commit_id],
                cwd=cwd,
            )
            git_checkout.wait()

            if git_checkout.returncode == 0:
                break


if __name__ == "__main__":
    main()
