/*
class worker {
  constructor(ism, tajriba, millati, tili) {
    this.ism = ism;
    this.tajriba = tajriba;
    this.millati = millati;
    this.tili = tili;
  }
}
let ishchi = new worker("Abdulloh", "15-yil", "o'zbek", "o'zbek tili");
console.log(ishchi);

class Admin extends worker {
  constructor(ism, tajriba, millati, tili, office) {
    super(ism, tajriba, millati, tili, office);
  }
}
let Admin1 = new Admin("Abdujamol", "10-yil", "o'zbek", "farg'ona");
console.log(Admin1);
*/
// 1-masala
// class person {
//   constructor(ism, yosh, mamlakat) {
//     this.ism = ism;
//     this.yosh = yosh;
//     this.mamlakat = mamlakat;
//   }
// }
// // 1-inson person classidan malumot olyabdi
// class inson_1 extends person {
//   constructor(ism, yosh, mamlakat, tajribasi) {
//     super(ism, yosh, mamlakat, tajribasi);
//     this.tajribasi = tajribasi;
//   }
// }
// let odam = new inson_1("Usmon", "25 - yosh", "Fargona", "7 - yil");
// console.log(odam);

// // 2-inson person classidan malumot olyabdi
// class inson_2 extends person {
//   constructor(ism, yosh, mamlakat, tel_raqami) {
//     super(ism, yosh, mamlakat, tel_raqami);
//     this.tel_raqami = tel_raqami;
//   }
// }
// let odam_2 = new inson_2("Kamron", "17 - yosh", "toshkent", "99.366-59-74");
// console.log(odam_2);
// 2-masala
// class rectangle {
//   constructor(boyi, eni) {
//     this.boyi = boyi;
//     this.eni = eni;
//   }
// }
// class perimetiri extends rectangle {
//   constructor(boyi, eni, perimetr) {
//     super(boyi, eni, perimetr);
//   }
// }
// let tortburchak = new perimetiri(10, 10);
// let perimetr = new perimetiri();
// console.log(tortburchak);
// console.log(perimetr);
//3-masla
// class vehicle {
//   constructor(marka, yil) {
//     this.marka = marka;
//     this.yil = yil;
//   }
// }
// class tafsilotlar extends vehicle {
//   constructor(marka, yil, eshiklar_soni) {
//     super(marka, yil, eshiklar_soni);
//     this.eshiklar_soni = eshiklar_soni;
//   }
// }
// let Avtomobil = new tafsilotlar("lamborghini", "2022 - yil", "2ta");
// console.log(Avtomobil);
// 4-masala
// class bank_account {
//   constructor(pul_qoyish, pul_olish) {
//     this.pul_qoyish = pul_qoyish;
//     this.pul_olish = pul_olish;
//   }
// }
// class hisoblash extends bank_account {
//   constructor(pul_qoyish, pul_olish) {
//     super(pul_qoyish, pul_olish);
//   }
// }
// let pulQoyish = +prompt("pul kiriting");
// let hisob = pulQoyish;
// let result_1 = `${hisob} so'm - jami summa`;
// console.log(result_1);

// let pulOlish = +prompt("pul oling");
// let keyingiPul = pulOlish;
// let result_2 = `${keyingiPul} so'm - olingan summa`;
// console.log(result_2);

// let jamipul = hisob - keyingiPul;
// let result_3 = `${jamipul} so'm - hozirgi summa`;
// console.log(result_3);
// 5-masala
class worker {
  constructor(ism, ish_haqqi) {
    this.ism = ism;
    this.ish_haqqi = ish_haqqi;
  }
}
class hisoblash extends worker {
  constructor(ism, ish_haqqi, yillik) {
    super(ism, ish_haqqi, yillik);
    this.yillik = yillik;
  }
}
let worker_oylik_ishhaqqi = +prompt("oylik ish haqqingizni kiriting");
let hisob_1 = worker_oylik_ishhaqqi * 12;
console.log(hisob_1 + " yillik ish haqqingiz");
// class maneger extends worker {
//   constructor(ism, ish_haqqi, yillik) {
//     super(ism, ish_haqqi, yillik);
//     this.yillik = yillik;
//   }
// }
