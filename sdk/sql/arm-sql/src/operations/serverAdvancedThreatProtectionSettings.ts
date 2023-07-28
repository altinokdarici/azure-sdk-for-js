/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { ServerAdvancedThreatProtectionSettings } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SqlManagementClient } from "../sqlManagementClient";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl";
import {
  ServerAdvancedThreatProtection,
  ServerAdvancedThreatProtectionSettingsListByServerNextOptionalParams,
  ServerAdvancedThreatProtectionSettingsListByServerOptionalParams,
  ServerAdvancedThreatProtectionSettingsListByServerResponse,
  AdvancedThreatProtectionName,
  ServerAdvancedThreatProtectionSettingsGetOptionalParams,
  ServerAdvancedThreatProtectionSettingsGetResponse,
  ServerAdvancedThreatProtectionSettingsCreateOrUpdateOptionalParams,
  ServerAdvancedThreatProtectionSettingsCreateOrUpdateResponse,
  ServerAdvancedThreatProtectionSettingsListByServerNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing ServerAdvancedThreatProtectionSettings operations. */
export class ServerAdvancedThreatProtectionSettingsImpl
  implements ServerAdvancedThreatProtectionSettings {
  private readonly client: SqlManagementClient;

  /**
   * Initialize a new instance of the class ServerAdvancedThreatProtectionSettings class.
   * @param client Reference to the service client
   */
  constructor(client: SqlManagementClient) {
    this.client = client;
  }

  /**
   * Get a list of the server's Advanced Threat Protection states.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param options The options parameters.
   */
  public listByServer(
    resourceGroupName: string,
    serverName: string,
    options?: ServerAdvancedThreatProtectionSettingsListByServerOptionalParams
  ): PagedAsyncIterableIterator<ServerAdvancedThreatProtection> {
    const iter = this.listByServerPagingAll(
      resourceGroupName,
      serverName,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listByServerPagingPage(
          resourceGroupName,
          serverName,
          options,
          settings
        );
      }
    };
  }

  private async *listByServerPagingPage(
    resourceGroupName: string,
    serverName: string,
    options?: ServerAdvancedThreatProtectionSettingsListByServerOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<ServerAdvancedThreatProtection[]> {
    let result: ServerAdvancedThreatProtectionSettingsListByServerResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByServer(resourceGroupName, serverName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByServerNext(
        resourceGroupName,
        serverName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByServerPagingAll(
    resourceGroupName: string,
    serverName: string,
    options?: ServerAdvancedThreatProtectionSettingsListByServerOptionalParams
  ): AsyncIterableIterator<ServerAdvancedThreatProtection> {
    for await (const page of this.listByServerPagingPage(
      resourceGroupName,
      serverName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Get a list of the server's Advanced Threat Protection states.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param options The options parameters.
   */
  private _listByServer(
    resourceGroupName: string,
    serverName: string,
    options?: ServerAdvancedThreatProtectionSettingsListByServerOptionalParams
  ): Promise<ServerAdvancedThreatProtectionSettingsListByServerResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serverName, options },
      listByServerOperationSpec
    );
  }

  /**
   * Get a server's Advanced Threat Protection state.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param advancedThreatProtectionName The name of the Advanced Threat Protection state.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serverName: string,
    advancedThreatProtectionName: AdvancedThreatProtectionName,
    options?: ServerAdvancedThreatProtectionSettingsGetOptionalParams
  ): Promise<ServerAdvancedThreatProtectionSettingsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serverName, advancedThreatProtectionName, options },
      getOperationSpec
    );
  }

  /**
   * Creates or updates an Advanced Threat Protection state.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param advancedThreatProtectionName The name of the Advanced Threat Protection state.
   * @param parameters The server Advanced Threat Protection state.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    serverName: string,
    advancedThreatProtectionName: AdvancedThreatProtectionName,
    parameters: ServerAdvancedThreatProtection,
    options?: ServerAdvancedThreatProtectionSettingsCreateOrUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<
        ServerAdvancedThreatProtectionSettingsCreateOrUpdateResponse
      >,
      ServerAdvancedThreatProtectionSettingsCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<ServerAdvancedThreatProtectionSettingsCreateOrUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: {
        resourceGroupName,
        serverName,
        advancedThreatProtectionName,
        parameters,
        options
      },
      spec: createOrUpdateOperationSpec
    });
    const poller = await createHttpPoller<
      ServerAdvancedThreatProtectionSettingsCreateOrUpdateResponse,
      OperationState<
        ServerAdvancedThreatProtectionSettingsCreateOrUpdateResponse
      >
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Creates or updates an Advanced Threat Protection state.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param advancedThreatProtectionName The name of the Advanced Threat Protection state.
   * @param parameters The server Advanced Threat Protection state.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    serverName: string,
    advancedThreatProtectionName: AdvancedThreatProtectionName,
    parameters: ServerAdvancedThreatProtection,
    options?: ServerAdvancedThreatProtectionSettingsCreateOrUpdateOptionalParams
  ): Promise<ServerAdvancedThreatProtectionSettingsCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      serverName,
      advancedThreatProtectionName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * ListByServerNext
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param nextLink The nextLink from the previous successful call to the ListByServer method.
   * @param options The options parameters.
   */
  private _listByServerNext(
    resourceGroupName: string,
    serverName: string,
    nextLink: string,
    options?: ServerAdvancedThreatProtectionSettingsListByServerNextOptionalParams
  ): Promise<ServerAdvancedThreatProtectionSettingsListByServerNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serverName, nextLink, options },
      listByServerNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByServerOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/advancedThreatProtectionSettings",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.LogicalServerAdvancedThreatProtectionListResult
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion6],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/advancedThreatProtectionSettings/{advancedThreatProtectionName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ServerAdvancedThreatProtection
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion6],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.advancedThreatProtectionName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/advancedThreatProtectionSettings/{advancedThreatProtectionName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ServerAdvancedThreatProtection
    },
    201: {
      bodyMapper: Mappers.ServerAdvancedThreatProtection
    },
    202: {
      bodyMapper: Mappers.ServerAdvancedThreatProtection
    },
    204: {
      bodyMapper: Mappers.ServerAdvancedThreatProtection
    },
    default: {}
  },
  requestBody: Parameters.parameters77,
  queryParameters: [Parameters.apiVersion6],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.advancedThreatProtectionName
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const listByServerNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.LogicalServerAdvancedThreatProtectionListResult
    },
    default: {}
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
