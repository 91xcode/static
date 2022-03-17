#!/usr/bin/env python3
import pyperclip
import subprocess


# 安装
# brew install fzf
# pip3 install pyperclip


# 请按照实际情况填写
username = "91xcode"
repo_name = "static"
branch_name = "master"



# https://raw.githubusercontent.com/91xcode/static/master/pic/1.png
# https://cdn.jsdelivr.net/gh/91xcode/static@master/pic/1.png


github = f"https://raw.githubusercontent.com/{username}/{repo_name}/{branch_name}/pic/"
jsdeliver = f"https://cdn.jsdelivr.net/gh/{username}/{repo_name}@{branch_name}/pic/"

copy_path = "fzf | tr -d '\n' | pbcopy"


def get_url():
    subprocess.call(copy_path, shell=True)
    path = pyperclip.paste()
    print(f"\n![]({github+path})\n")
    print(f"![]({jsdeliver+path})\n")
    pyperclip.copy(f"![]({jsdeliver+path})")

while True:
    if input("Press Enter to continue. Type something else to quit: ") == "":
        get_url()
    else:
        break