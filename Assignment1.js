let teacher={
    degreeCeritificate:function (){
        return this.degree.Engineering +this.degree.Phd+ this.certificates.certificate1+this.certificates.certificate2 ;
    }
    }
teacher.firstName=`Anil`
teacher.lastName=`Adani`
teacher.contactNo=987456321
teacher.degree={
    Engineering:` CSC`,
    Phd:` Advance Computing`
}
teacher.certificates={
    certificate1:` AWS Solution Architect`,
    certificate2:` Adobe Certified Associate(ACA)`
}
console.log(`Teacher's Full Name : ${teacher.firstName} ${teacher.lastName}`);
console.log(`Teacher's Degrees :`,teacher.degree);
console.log(`Teacher's Certifattes : `,teacher.certificates)
let dc=teacher.degreeCeritificate();
console.log(`Teacher's degrees and certificates are : ${dc}`);