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
    dict(name="RedstoneFlux", url="git@github.com:CoFH/RedstoneFlux.git"),
    dict(name="CoFHCore", url="git@github.com:CoFH/CoFHCore.git"),
    dict(name="CoFHWorld", url="git@github.com:CoFH/CoFHWorld.git"),
    dict(name="ThermalFoundation", url="git@github.com:CoFH/ThermalFoundation.git"),
    dict(name="ThermalExpansion", url="git@github.com:CoFH/ThermalExpansion.git"),
    dict(name="ThermalDynamics", url="git@github.com:CoFH/ThermalDynamics.git"),
    dict(name="ThermalCultivation", url="git@github.com:CoFH/ThermalCultivation.git"),
    dict(name="ThermalInnovation", url="git@github.com:CoFH/ThermalInnovation.git"),
    dict(name="RedstoneArsenal", url="git@github.com:CoFH/RedstoneArsenal.git"),
    dict(name="VanillaTools", url="git@github.com:CoFH/VanillaTools.git"),
    dict(name="VanillaSatchels", url="git@github.com:CoFH/VanillaSatchels.git"),
    dict(name="1.14", url="git@github.com:KingLemming/1.14.git"),
    dict(name="1.15", url="git@github.com:KingLemming/1.15.git"),
]


def main():
    print("\nFetching repositories...")

    repos_path = os.path.abspath(os.path.join(os.getcwd(), '_modrepos'))
    os.makedirs(repos_path, exist_ok=True)

    def fetch(repo):
        repo_path = os.path.join(repos_path, repo["name"])

        if not os.path.isdir(repo_path):
            Popen(["git", "clone", repo["url"]], cwd=repos_path).wait()
        else:
            Popen(["git", "fetch"], cwd=repo_path).wait()

        sys.stdout.write("- {}\n".format(repo["name"]))

    threads = [Thread(target=fetch, args=(repo,)) for repo in REPOS]

    for t in threads:
        t.start()

    for t in threads:
        t.join()

    for repo in REPOS:
        print("")

        cwd = os.path.join(repos_path, repo["name"])

        current_commit_id = (
            Popen(["git", "rev-parse", "--short", "HEAD"], stdout=PIPE, cwd=cwd)
            .communicate()[0]
            .strip()
            .decode("utf-8")
        )

        while True:
            commit_id = input("Commit ID for {} ({}): ".format(repo["name"], current_commit_id))
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
