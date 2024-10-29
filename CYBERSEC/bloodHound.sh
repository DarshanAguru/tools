#!/bin/bash

if [["$1" == "-h"]] || [["$1" == "--help"]]; then
    echo "Usage: $0 <domain> <username> <password> <ip>"
    exit
fi

if [[ "$#" -ne 4 ]]; then 
    echo "Incorrect number of arguments"
    echo "Usage: $0 <domain> <username> <password> <domain> <ip>"
    exit
fi

DOMAIN=$1
USERNAME=$2
PASSWORD=$3
IP=$4

bloodhound-python -d $DOMAIN -u $USERNAME -p $PASSWORD -gc $DOMAIN -c ALL -ns $IP