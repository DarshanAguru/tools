#!/bin/bash

if [["$1" == "-h"]] || [["$1" == "--help"]]; then
    echo "Usage: $0 <target>"
    echo "ex: $0 192.168.1"
    exit
fi

if [["$1" == ""]]; then
    echo "No target specified"
    echo "Usage: $0 <target>"
    echo "ex: $0 192.168.1"
else
    for ip in `seq 1 255`; do
        ping -c 1 $1.$ip | grep "64 bytes" | cut -d " " -f 4 | tr -d ":" &
    done
fi


