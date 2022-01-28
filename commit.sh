#!/bin/sh

CURRENTPATH=$(cd `dirname $0`; pwd)
cd $CURRENTPATH


set -e

comment=$1
getComment() {
    if test -z $comment; then
        echo "请输入本次更新内容，如 修复xxxbug :"
        read -p "" comment
        getComment
    fi
}

{
    git pull
} || {
    echo ""
}
echo "本次改动文件如下😂\n\n\n"
git status
echo "\n\n\n"


getComment

git add .
git commit -m $comment
git push
echo "\n"
echo "代码已经提交到git"
echo "\n"

while [ "$confirmed" != "y" -a "$confirmed" != "Y" ]
do
    if [ "$confirmed" == "n" -o "$confirmed" == "N" ]; then
        exit
    fi
    read -p "是否发布到npm? (y/n):" confirmed
done
yarn publish
echo "\n"
echo "代码已经发布到npm"
