import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArmService {

  constructor() { }

  ARM = {
    global: {
      username: "օգտագործողի անուն",
      password: "գաղտնաբառ",
      submit: "ներկայացնել"
    },
    account: {
      question: "ՈՒՆԵ՞Ք ՀԱՇԻՎ",
      answerYes: "այո",
      answerNo: "ոչ"
    },
    login: {
      title: "Խնդրում ենք մուտք գործել",
    },
    register: {
      title: "Խնդրում ենք գրանցվել",
      repeat: "Կրկնեք գաղտնաբառը",
      letterErrore:"մինիմում տառ 3, առավելագույն տառ 10",
      passwordErrore:"սխալ գաղտնաբառ"
    },
    goto:{
      title:"Դուք արդեն 3 ձախողված փորձ ունեք, ցանկանու՞մ եք գրանցվել, թե՞ մոռացել եք ձեր գաղտնաբառը",
      register:"Գրանցվել",
      forgot:'Մոռացել եմ',
      login:'գնալ մուտքի էջ'
    },
    recover:{
      title:"Վերականգնել գաղտնաբառը",
      new:"նոր գաղտնաբառ",
      save:"պահպանել"
    }
  }
}
