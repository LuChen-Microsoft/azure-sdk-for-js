/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  OperationParameter,
  OperationURLParameter,
  OperationQueryParameter
} from "@azure/core-client";
import {
  VerificationRequest as VerificationRequestMapper,
  VerificationCodeRequest as VerificationCodeRequestMapper
} from "../models/mappers";

export const accept: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String"
    }
  }
};

export const endpoint: OperationURLParameter = {
  parameterPath: "endpoint",
  mapper: {
    serializedName: "endpoint",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const apiVersion: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2022-11-15",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const contentType: OperationParameter = {
  parameterPath: ["options", "contentType"],
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Content-Type",
    type: {
      name: "String"
    }
  }
};

export const identity: OperationParameter = {
  parameterPath: ["options", "identity"],
  mapper: VerificationRequestMapper
};

export const channel: OperationParameter = {
  parameterPath: ["options", "channel"],
  mapper: VerificationRequestMapper
};

export const verificationCode: OperationParameter = {
  parameterPath: ["options", "verificationCode"],
  mapper: VerificationCodeRequestMapper
};

export const verificationId: OperationURLParameter = {
  parameterPath: "verificationId",
  mapper: {
    serializedName: "verificationId",
    required: true,
    type: {
      name: "Uuid"
    }
  }
};
