# OSMANiC SimpleWebCloner PATH Configurator Copyright 2022
# Version 1.0.1
# This is free software, obtain a copy at https://github.com/OSMANiCTeam/SimpleWebCloner
# If you paid for this software, demand a refund
FILE=/usr/bin/simplewebcloner
if -f "$FILE" ]; then
	echo SimpleWebCloner has already been added to PATH
else
	echo Sudo permissions are needed to add executable perms to SimpleWebCloner and move it to PATH.
	sudo chmod +x SimpleWebCloner.sh
	sudo mv SimpleWebCloner.sh /usr/bin/simplewebcloner
fi
    echo Thanks for using SimpleWebCloner
