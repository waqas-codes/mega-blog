import conf from "../conf/conf"
import { Client, Account, ID } from "appwrite"

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
        this.account = new Account(this.client)
    }

    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);

            if (userAccount) {
                // call another function
                return this.login({email, password});
            } else {
                return userAccount
            }
        } catch(error){
            return error
        }
    }

    async login(){
        try{
            return await this.account.createEmailPasswordSession(email, password)
        }catch(error){
            return error
        }
    }

    async getCurrentUser(){
        try{
            return await this.account.getSession()
        }catch(error){
            return error
        }
    }

    async logout(){
        try{
            return await this.account.deleteSession()
        }catch(error){
            return error
        }
    }
}

const authService = AuthService()
export default authService