interface IMessage {
  id: 8;
  muid: string;
  text: string;
  receivedAt: Date | null;
  readAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
  senderId: PermId;
  receiverId: PermId;
  conversationId: PermId;
  sender: User;
  receiver: User;
}

interface IConversation {
  lastMessage: IMessage;
  user: User;
}
