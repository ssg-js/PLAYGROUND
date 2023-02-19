package com.websocket.chat.dto;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@Getter
@Setter
public class ReadGatheringMessage {

    @Id
    private int messageId;
    private boolean isRead;

}