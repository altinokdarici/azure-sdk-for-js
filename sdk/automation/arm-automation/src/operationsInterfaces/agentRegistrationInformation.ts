/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  AgentRegistrationInformationGetOptionalParams,
  AgentRegistrationInformationGetResponse,
  AgentRegistrationRegenerateKeyParameter,
  AgentRegistrationInformationRegenerateKeyOptionalParams,
  AgentRegistrationInformationRegenerateKeyResponse
} from "../models";

/** Interface representing a AgentRegistrationInformation. */
export interface AgentRegistrationInformation {
  /**
   * Retrieve the automation agent registration information.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    automationAccountName: string,
    options?: AgentRegistrationInformationGetOptionalParams
  ): Promise<AgentRegistrationInformationGetResponse>;
  /**
   * Regenerate a primary or secondary agent registration key
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param parameters The name of the agent registration key to be regenerated
   * @param options The options parameters.
   */
  regenerateKey(
    resourceGroupName: string,
    automationAccountName: string,
    parameters: AgentRegistrationRegenerateKeyParameter,
    options?: AgentRegistrationInformationRegenerateKeyOptionalParams
  ): Promise<AgentRegistrationInformationRegenerateKeyResponse>;
}