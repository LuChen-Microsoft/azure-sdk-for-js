// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  SerializedCommunicationIdentifier,
  deserializeCommunicationIdentifier,
  serializeCommunicationIdentifier,
} from "@azure/communication-common";
import * as RestModel from "../generated/src/models";
import { AddParticipantsRequest } from "./requests";
import { CreateChatThreadOptions } from "./options";
import {
  ChatMessage,
  ChatMessageContent,
  ChatMessageReadReceipt,
  ChatParticipant,
  ChatThreadProperties,
  CreateChatThreadResult,
  ChatThreadItem,
  RetentionPolicy,
} from "./models";

export const mapToCreateChatThreadOptionsRestModel = (
  options: CreateChatThreadOptions
): RestModel.ChatCreateChatThreadOptionalParams => {
  const { participants, idempotencyToken, ...rest } = options;
  return {
    repeatabilityRequestId: idempotencyToken,
    ...rest,
  };
};

/**
 * @internal
 * Mapping chat participant REST model to chat participant SDK model
 */
export const mapToChatThreadItemSdkModel = (
  chatThreadItem: RestModel.ChatThreadItem
): ChatThreadItem => {
  const { retentionPolicy, ...rest } = chatThreadItem;
  let result: ChatThreadItem = { ...rest };

  if (retentionPolicy) {
    result = {
      ...result,
      retentionPolicy: retentionPolicy as RetentionPolicy,
    };
  }

  return result;
};

/**
 * @internal
 * Mapping chat participant customer model to chat participant REST model
 */
export const mapToChatParticipantRestModel = (
  chatParticipant: ChatParticipant
): RestModel.ChatParticipant => {
  const { id, ...rest } = chatParticipant;
  return {
    ...rest,
    communicationIdentifier: serializeCommunicationIdentifier(id),
  };
};

/**
 * @internal
 * Mapping add participants request to add chat participants request REST model
 */
export const mapToAddChatParticipantsRequestRestModel = (
  addParticipantsRequest: AddParticipantsRequest
): RestModel.AddChatParticipantsRequest => {
  return {
    participants: addParticipantsRequest.participants?.map((participant) =>
      mapToChatParticipantRestModel(participant)
    ),
  };
};

/**
 * @internal
 * Mapping chat participant REST model to chat participant SDK model
 */
export const mapToChatParticipantSdkModel = (
  chatParticipant: RestModel.ChatParticipant
): ChatParticipant => {
  const { communicationIdentifier, ...rest } = chatParticipant;
  return {
    ...rest,
    id: deserializeCommunicationIdentifier(
      communicationIdentifier as SerializedCommunicationIdentifier
    ),
  };
};

/**
 * @internal
 */
export const mapToChatContentSdkModel = (
  content: RestModel.ChatMessageContent
): ChatMessageContent => {
  const { participants, initiatorCommunicationIdentifier, ...otherChatContents } = content;
  let result: ChatMessageContent = { ...otherChatContents };
  if (initiatorCommunicationIdentifier) {
    const initiator = deserializeCommunicationIdentifier(
      initiatorCommunicationIdentifier as SerializedCommunicationIdentifier
    );
    result = { ...result, initiator };
  }
  if (participants) {
    result = {
      ...result,
      participants: participants?.map((participant) => mapToChatParticipantSdkModel(participant)),
    };
  }
  return result;
};

/**
 * @internal
 * Mapping chat message REST model to chat message SDK model
 */
export const mapToChatMessageSdkModel = (chatMessage: RestModel.ChatMessage): ChatMessage => {
  const { content, senderCommunicationIdentifier, ...otherChatMessage } = chatMessage;
  let result: ChatMessage = { ...otherChatMessage };
  if (content) {
    result = {
      ...result,
      content: mapToChatContentSdkModel(content),
    };
  }
  if (senderCommunicationIdentifier) {
    const sender = deserializeCommunicationIdentifier(
      senderCommunicationIdentifier as SerializedCommunicationIdentifier
    );
    result = { ...result, sender };
  }
  return result;
};

/**
 * @internal
 * Mapping chat messages collection REST model to chat message SDK model array
 */
export const mapToChatMessagesSdkModelArray = (
  chatMessagesCollection: RestModel.ChatMessagesCollection
): ChatMessage[] => {
  return chatMessagesCollection.value?.map((chatMessage) => mapToChatMessageSdkModel(chatMessage));
};

/**
 * @internal
 * Mapping chat thread REST model to chat thread SDK model
 */
export const mapToChatThreadPropertiesSdkModel = (
  chatThread: RestModel.ChatThreadProperties
): ChatThreadProperties => {
  const { createdByCommunicationIdentifier, retentionPolicy, ...rest } = chatThread;
  let result: ChatThreadProperties = { ...rest };
  if (createdByCommunicationIdentifier) {
    result = {
      ...result,
      createdBy: deserializeCommunicationIdentifier(
        createdByCommunicationIdentifier as SerializedCommunicationIdentifier
      ),
    };
  }

  if (retentionPolicy) {
    result = {
      ...result,
      retentionPolicy: retentionPolicy as RetentionPolicy,
    };
  }

  return result;
};

/**
 * @internal
 * Mapping chat thread REST model to chat thread SDK model
 */
export const mapToCreateChatThreadResultSdkModel = (
  result: RestModel.CreateChatThreadResult
): CreateChatThreadResult => {
  const { chatThread, ...rest } = result;
  if (chatThread) {
    return {
      ...rest,
      chatThread: mapToChatThreadPropertiesSdkModel(chatThread),
    };
  } else {
    return { ...rest };
  }
};

/**
 * @internal
 * Mapping read receipt REST model to read receipt SDK model
 */
export const mapToReadReceiptSdkModel = (
  readReceipt: RestModel.ChatMessageReadReceipt
): ChatMessageReadReceipt => {
  const { senderCommunicationIdentifier, ...rest } = readReceipt;
  return {
    ...rest,
    sender: deserializeCommunicationIdentifier(
      senderCommunicationIdentifier as SerializedCommunicationIdentifier
    ),
  };
};
