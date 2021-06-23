var admin = require("firebase-admin");
var serviceAccount = require("./testfirestoreproject-dea44-firebase-adminsdk-je51b-70d50b114f.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
const firestore = admin.firestore();
class Database {
  constructor() {}
  async addEmployee(id, name, rank, salary) {
    try {
      let checkID = await firestore.collection("Employee").doc(id).get();
      if (!checkID.exists) {
        await firestore.collection("Employee").doc(id).set({
          name: name,
          rank: rank,
          salary: salary,
   
        });
      } else {
        console.log("Đăng nhập thành công");
      }
    } catch (err) {}
  }
  async updateProfile(id, name, rank, salary) {
    await firestore.collection("Employee").doc(id).update({
      name: name,
      rank: rank,
      salary: salary,
    });
  }
  async deleteEmployee(id) {
    try{
      const result=await firestore.collection("Employee").doc(id).delete();
      return result;
    }catch(err){
      console.log(err);
    }
 
  }
  async getEmployeeInfo(id){
      let result;
      await firestore.collection("Employee").doc(id).get().then(data=>{
        result=data.data();
      })
      return result;
  }
}
module.exports = Database;
