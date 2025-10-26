const conf = {
    appwriteurl: String(import.meta.env.VITE_APPWRITE_URL),
    projectid: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    databaseid: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    datacollectionid: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
};

export default conf;
