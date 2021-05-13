import { makeAutoObservable, runInAction } from "mobx";
import agent from "../Api/agent";
import { User } from "../Models/user";

export default class userStore {
    currentUser: User | undefined = undefined;
    loading = false;
    loadingInitial = true;
    editMode: boolean = false;
    isAuthenticated: boolean = false;
    errorMessage: string = "";

    //! This must be included to observe changes within the store (works in conjunction with the HOC, "observer", in each component viewing or updating state)
    constructor() {
        makeAutoObservable(this)
    }

    loadUser = async (loginCredentials: any = undefined) => {
        let user = this.currentUser;
        if (user) {
            return user;
        } else {
            this.setLoadingInitial(true);
            try {
                user = await agent.Users.details(loginCredentials);
                if (user?.username) {
                  this.setUser(user);
                }
                this.setLoadingInitial(false);
                return user;
            } catch (error) {
                console.log(error);
                this.setLoadingInitial(false);
            }
        }
    }

    loadUserById = async (userId: string) => {
        let user = this.currentUser;
        if (user) {
            return user;
        } else {
            this.setLoadingInitial(true);
            try {
                user = await agent.Users.find(userId);
                runInAction(() => {
                    this.isAuthenticated = true;
                });
                if (user._id === userId) {
                  this.setUser(user);
                  this.setLoadingInitial(false);
                  return user;
                }
            } catch (error) {
                console.log(error);
                this.setLoadingInitial(false);
            }
        }
    }

    loadCurrentUserName = async () => {
        if (this.currentUser) {
            return this.currentUser;
        }
    }

    private getUser = (id: string) => {
        return this.currentUser;
    }

    private setUser = async (user: User | undefined) => {
        runInAction(() => {
            this.currentUser = user;
        });
    }

    setLoadingInitial = (state: boolean) => {
        runInAction(() => {
            this.loadingInitial = state;
        });
    }

    setLoading = (state: boolean) => {
        runInAction(() => {
            this.loading = state;
        });
    }

    createUser = async (user: User) => {
        this.setLoading(true);
        try {
            user = await agent.Users.create(user);
            if (user.username) {
                this.setUser(user);
            }
            this.setLoading(false);
        } catch (error) {
            console.log(error);
            this.setLoading(false);
        }
    }

    logUserOut = async () => {
        this.setLoading(true);
        try {
            if (this.currentUser) {
                await agent.Users.logout();
            }
            this.setUser(undefined);
            this.setLoading(false);
        } catch (error) {
            console.log(error);
            this.setLoading(false);
        }
    }

}
