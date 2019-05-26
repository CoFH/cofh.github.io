""" Clones, fetches and checks out the repositories of all the CoFH mods in the
parent directory.
"""

import os
import sys
from subprocess import Popen, PIPE
from threading import Thread

REPOS = [
    'RedstoneFlux',
    'CoFHCore',
    'CoFHWorld',
    'ThermalFoundation',
    'ThermalExpansion',
    'ThermalDynamics',
    'ThermalCultivation',
    'ThermalInnovation',
    'RedstoneArsenal',
    'VanillaTools',
    'VanillaSatchels'
]

print('\nFetching repositories...')

parent_path = os.path.abspath(os.path.join(os.getcwd(), os.pardir))

def fetch(repo):
    repo_path = os.path.join(parent_path, repo)

    if not os.path.isdir(repo_path):
        Popen(['git', 'clone', 'git@github.com:CoFH/{}.git'.format(repo)], cwd=parent_path).wait()
    else:
        Popen(['git', 'fetch'], cwd=repo_path).wait()

    sys.stdout.write('- {}\n'.format(repo))

threads = [Thread(target=fetch, args=(repo,)) for repo in REPOS]

for t in threads:
    t.start()

for t in threads:
    t.join()

for repo in REPOS:
    print('')

    cwd = os.path.join(parent_path, repo)

    current_commit_id = Popen(['git', 'rev-parse', '--short', 'HEAD'], stdout=PIPE, cwd=cwd).communicate()[0].strip().decode('utf-8')

    while True:
        commit_id = input('Commit ID for {} ({}): '.format(repo, current_commit_id))
        if commit_id == '':
            break

        print('Checking out {}...'.format(commit_id))
        git_checkout = Popen(['git', '-c', 'advice.detachedHead=false', 'checkout', commit_id], cwd=cwd)
        git_checkout.wait()

        if git_checkout.returncode == 0:
            break
