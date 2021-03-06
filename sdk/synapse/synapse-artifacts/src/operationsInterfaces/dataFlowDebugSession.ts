/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import * as coreHttp from "@azure/core-http";
import { LROPoller } from "../lro";
import {
  DataFlowDebugSessionInfo,
  CreateDataFlowDebugSessionRequest,
  DataFlowDebugSessionCreateDataFlowDebugSessionResponse,
  DataFlowDebugPackage,
  DataFlowDebugSessionAddDataFlowResponse,
  DeleteDataFlowDebugSessionRequest,
  DataFlowDebugCommandRequest,
  DataFlowDebugSessionExecuteCommandResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a DataFlowDebugSession. */
export interface DataFlowDebugSession {
  /**
   * Query all active data flow debug sessions.
   * @param options The options parameters.
   */
  listQueryDataFlowDebugSessionsByWorkspace(
    options?: coreHttp.OperationOptions
  ): PagedAsyncIterableIterator<DataFlowDebugSessionInfo>;
  /**
   * Creates a data flow debug session.
   * @param request Data flow debug session definition
   * @param options The options parameters.
   */
  createDataFlowDebugSession(
    request: CreateDataFlowDebugSessionRequest,
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<DataFlowDebugSessionCreateDataFlowDebugSessionResponse>>;
  /**
   * Add a data flow into debug session.
   * @param request Data flow debug session definition with debug content.
   * @param options The options parameters.
   */
  addDataFlow(
    request: DataFlowDebugPackage,
    options?: coreHttp.OperationOptions
  ): Promise<DataFlowDebugSessionAddDataFlowResponse>;
  /**
   * Deletes a data flow debug session.
   * @param request Data flow debug session definition for deletion
   * @param options The options parameters.
   */
  deleteDataFlowDebugSession(
    request: DeleteDataFlowDebugSessionRequest,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse>;
  /**
   * Execute a data flow debug command.
   * @param request Data flow debug command definition.
   * @param options The options parameters.
   */
  executeCommand(
    request: DataFlowDebugCommandRequest,
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<DataFlowDebugSessionExecuteCommandResponse>>;
}
