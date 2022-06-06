//עשיתי את התרגיל רבע שעה פחות מהזמן
class Payment {
    constructor(dateOfPayment, sum, description, transactionStatus, formOfPayment, PayerDetails) {
        this.dateOfPayment = dateOfPayment;
        this.sum = sum;
        this.description = description;
        this.transactionStatus = transactionStatus;
        this.transactionStatus = transactionStatus;
        this.PayerDetails = PayerDetails;
    }
}
class CreditDetails {
    constructor(numberCredit, validity, cvv) {
        this.numberCredit = numberCredit;
        this.validity = validity;
        this.cvv = cvv;
    }
    section = document.getElementById('section');
    arrPayment = [];
    createPayment = () => {
        form = document.querySelector('form')
            .onsubmit = (e) => {
                e.preventDefault();
                formData = new FormData(form);
                data = Object.fromEntries([...formData.entries()]);
                payment = new Payment(data.dateOfPayment, data.sum, data.description,
                    data.transactionStatus, data.formOfPayment, data.userName, data.phone, data.id);
                if (payment.formOfPayment === cash) {
                    this.arrPayment.push(payment);
                }
                if (payment.formOfPayment === credit) {
                    this.section.innerHTML = document.createElement('input');
                    //הוספת form להכנסת נתוני האשראי
                    payC = new CreditDetails(numberCredit, validity, cvv);
                    this.arrPayment.push(payC);
                }
                if (payment.formOfPayment === check) {
                    payC = new ClearingCompany();
                    this.arrPayment.push(payC);
                }
            }
    }
    refundPayment = (payment) => {
        this.arrPayment.forEach(p => p.id === payment.id ? p.sum = 0 : p.sum = sum)
    }
    updateSum = (payment) => {
        this.arrPayment.forEach(p => p.id === payment.id ? p.sum = payment.sum : p = p)
    }
    updateDescription = (payment) => {
        this.arrPayment.forEach(p => p.id === payment.id ? p = payment.description : p = p)
    }
    updateFormOfPayment = (payment) => {
        this.arrPayment.forEach(p => p.id === payment.id ? p = payment.formOfPayment : p = p)
    }
}
class creditCompany extends Payment {
    constructor(numberCredit, validity, cvv) {
         pay = new CreditDetails(numberCredit, validity, cvv);
    }
}
class ClearingCompany extends Payment {
    id = 1;
    constructor() {
        this.idPayed = id++;
    }
}