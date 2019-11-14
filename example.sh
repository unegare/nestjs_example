#!/usr/bin/env sh

grpc_cli call 127.0.0.1:3000 Rpc.MethodName '' --protofiles=rpc.proto --proto_path=./proto/
