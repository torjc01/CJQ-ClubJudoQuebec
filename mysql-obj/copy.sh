#!/bin/sh 
# 
# Filename: copy.sh
# Fait la copie des scripts SQL vers le conteineur docker désigné pour 
# l'application du CJQ. 
# Author: Julio-Cesar Torres <juliozohar@gmail.com> (@juliozohar)
# Date: 2021-06-03
#
#   Copyright 2021 Kryptogarten LLC
#
#   Licensed under the Apache License, Version 2.0 (the "License");
#   you may not use this file except in compliance with the License.
#   You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
#   Unless required by applicable law or agreed to in writing, software
#   distributed under the License is distributed on an "AS IS" BASIS,
#   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
#   See the License for the specific language governing permissions and
#   limitations under the License.
# ###
docker cp CJQ-config.sql MySQLCJQ:config.sql
docker cp CJQ-DDL.sql    MySQLCJQ:DDL.sql
docker cp CJQ-DML.sql    MySQLCJQ:DML.sql