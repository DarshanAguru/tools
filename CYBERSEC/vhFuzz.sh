#!/bin/bash

if [["$1" == "-h"]] || [["$1" == "--help"]]; then
    echo "Usage: $0 <target> <wordlist> <url> <fs filter>"
    exit
fi

if [[ "$#" -ne 4 ]]; then 
    echo "Incorrect number of arguments"
    echo "Usage: $0 <target> <wordlist> <url> <fs filter>"
    exit
fi

DOMAIN=$1
WORDLIST=$2
URL=$3
FS_FILTER=$4

ffuf -H "Host: FUZZ.$DOMAIN" -H "User-Agent: PENTEST" -u "$URL" -c -w "$WORDLIST" -fs "$FS_FILTER"