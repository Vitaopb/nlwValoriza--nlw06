import { Request, Response } from "express";
import { ListUserSendComplimentsService } from "../services/ListUserSendComplimentsService";

export class ListUserSendComplimentsController { 
  async handle(request: Request, response: Response) {
    const { user_id } = request;
    const listUserSendComplimentsService = new ListUserSendComplimentsService();
    const compliments = await listUserSendComplimentsService.execute(user_id);
    response.status(200).json({ compliments });
  }
}