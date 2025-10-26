import { Client, Account, ID } from "appwrite";
import conf from "../conf/conf";

export class Authentication {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteurl)
            .setProject(conf.projectid);

        this.account = new Account(this.client);
    }

  async register({ fullname, email, password }) {
  try {
    return await this.account.create(ID.unique(), email, password, fullname);
  } catch (error) {
    throw error;
  }
}


    async login({ email, password }) {
        try {
            const session = await this.account.createEmailPasswordSession(
                email,
                password
            );
            return session;
        } catch (error) {
            throw error;
        }
    }

    async currentuser() {
        try {
            return await this.account.get();
        } catch (error) {
            throw error;
        }
    }

    async logout() {
        try {
            return await this.account.deleteSession("current");
        } catch (error) {
            throw error;
        }
    }
    async session(){
        try {
            return await this.account.createSession("current");
        } catch (error) {
            throw error;
        }
    }
}

const auth = new Authentication();
export default auth;
