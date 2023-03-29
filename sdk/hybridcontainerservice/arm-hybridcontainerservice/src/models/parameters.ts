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
  ProvisionedClusters as ProvisionedClustersMapper,
  ProvisionedClustersPatch as ProvisionedClustersPatchMapper,
  HybridIdentityMetadata as HybridIdentityMetadataMapper,
  AgentPool as AgentPoolMapper,
  StorageSpaces as StorageSpacesMapper,
  StorageSpacesPatch as StorageSpacesPatchMapper,
  VirtualNetworks as VirtualNetworksMapper,
  VirtualNetworksPatch as VirtualNetworksPatchMapper
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

export const $host: OperationURLParameter = {
  parameterPath: "$host",
  mapper: {
    serializedName: "$host",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const subscriptionId: OperationURLParameter = {
  parameterPath: "subscriptionId",
  mapper: {
    constraints: {
      MinLength: 1
    },
    serializedName: "subscriptionId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const resourceGroupName: OperationURLParameter = {
  parameterPath: "resourceGroupName",
  mapper: {
    constraints: {
      MaxLength: 90,
      MinLength: 1
    },
    serializedName: "resourceGroupName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const resourceName: OperationURLParameter = {
  parameterPath: "resourceName",
  mapper: {
    constraints: {
      Pattern: new RegExp(
        "^[a-zA-Z0-9]$|^[a-zA-Z0-9][-_a-zA-Z0-9]{0,61}[a-zA-Z0-9]$"
      ),
      MaxLength: 63,
      MinLength: 1
    },
    serializedName: "resourceName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const apiVersion: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2022-09-01-preview",
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

export const provisionedClusters: OperationParameter = {
  parameterPath: "provisionedClusters",
  mapper: ProvisionedClustersMapper
};

export const provisionedClusters1: OperationParameter = {
  parameterPath: "provisionedClusters",
  mapper: ProvisionedClustersPatchMapper
};

export const nextLink: OperationURLParameter = {
  parameterPath: "nextLink",
  mapper: {
    serializedName: "nextLink",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const body: OperationParameter = {
  parameterPath: "body",
  mapper: HybridIdentityMetadataMapper
};

export const hybridIdentityMetadataResourceName: OperationURLParameter = {
  parameterPath: "hybridIdentityMetadataResourceName",
  mapper: {
    constraints: {
      MaxLength: 64,
      MinLength: 3
    },
    serializedName: "hybridIdentityMetadataResourceName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const agentPoolName: OperationURLParameter = {
  parameterPath: "agentPoolName",
  mapper: {
    constraints: {
      MaxLength: 64,
      MinLength: 3
    },
    serializedName: "agentPoolName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const agentPool: OperationParameter = {
  parameterPath: "agentPool",
  mapper: AgentPoolMapper
};

export const customLocationResourceUri: OperationURLParameter = {
  parameterPath: "customLocationResourceUri",
  mapper: {
    serializedName: "customLocationResourceUri",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const storageSpacesName: OperationURLParameter = {
  parameterPath: "storageSpacesName",
  mapper: {
    constraints: {
      MaxLength: 64,
      MinLength: 3
    },
    serializedName: "storageSpacesName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const storageSpaces: OperationParameter = {
  parameterPath: "storageSpaces",
  mapper: StorageSpacesMapper
};

export const storageSpaces1: OperationParameter = {
  parameterPath: "storageSpaces",
  mapper: StorageSpacesPatchMapper
};

export const virtualNetworksName: OperationURLParameter = {
  parameterPath: "virtualNetworksName",
  mapper: {
    constraints: {
      MaxLength: 64,
      MinLength: 3
    },
    serializedName: "virtualNetworksName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const virtualNetworks: OperationParameter = {
  parameterPath: "virtualNetworks",
  mapper: VirtualNetworksMapper
};

export const virtualNetworks1: OperationParameter = {
  parameterPath: "virtualNetworks",
  mapper: VirtualNetworksPatchMapper
};
