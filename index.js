function generate() {
    var fullName = document.querySelector('#name').value;
    var regNumber = document.querySelector('#reg').value;
    var subjectName1 = document.querySelector('#sna1').value;
    var subjectName2 = document.querySelector('#sna2').value;
    var subjectName3 = document.querySelector('#sna3').value;
    var subjectName4 = document.querySelector('#sna4').value;
    var subjectName5 = document.querySelector('#sna5').value;

    var subjectScore1 = document.querySelector('#ssc1').value;
    var subjectScore2 = document.querySelector('#ssc2').value;
    var subjectScore3 = document.querySelector('#ssc3').value;
    var subjectScore4 = document.querySelector('#ssc4').value;
    var subjectScore5 = document.querySelector('#ssc5').value;

    document.querySelector('#sname').innerHTML = fullName;
    document.querySelector('#sreg').innerHTML = regNumber;

    document.querySelector('#sub1').innerHTML = subjectName1
    document.querySelector('#sub2').innerHTML = subjectName2;
    document.querySelector('#sub3').innerHTML = subjectName3;
    document.querySelector('#sub4').innerHTML = subjectName4;
    document.querySelector('#sub5').innerHTML = subjectName5;

    document.querySelector('#score1').innerHTML = subjectScore1;
    document.querySelector('#score2').innerHTML = subjectScore2;
    document.querySelector('#score3').innerHTML = subjectScore3;
    document.querySelector('#score4').innerHTML = subjectScore4;
    document.querySelector('#score5').innerHTML = subjectScore5;



    var Total = (subjectScore1 * 1) + (subjectScore2 * 1) + (subjectScore3 * 1) + (subjectScore4 * 1) + (subjectScore5 * 1);
    document.querySelector('#tom').innerHTML = Total;

    var percent = (Total / 500) * 100;
    percent = percent.toFixed(2);
    var percentage = (percent + "%");
    document.querySelector('#perc').innerHTML = percentage;

    if (percent >= 70) {
        var tRemark = 'Excellent';

    } else if (percent >= 60) {
        tRemark = 'Good';

    } else if (percent >= 50) {
        tRemark = 'Average';

    } else if (percent >= 40) {
        tRemark = 'Pass';

    } else if (percent <= 39) {
        tRemark = 'Fail';

    }

    if (subjectScore1 >= 70) {
        document.querySelector('#grade1').innerHTML = 'A';
    } else if (subjectScore1 >= 60) {
        document.querySelector('#grade1').innerHTML = 'B';
    } else if (subjectScore1 >= 50) {
        document.querySelector('#grade1').innerHTML = 'C';
    } else if (subjectScore1 >= 40) {
        document.querySelector('#grade1').innerHTML = 'D';
    } else {
        document.querySelector('#grade1').innerHTML = 'F';
    }

    if (subjectScore2 >= 70) {
        document.querySelector('#grade2').innerHTML = 'A';
    } else if (subjectScore2 >= 60) {
        document.querySelector('#grade2').innerHTML = 'B';
    } else if (subjectScore2 >= 50) {
        document.querySelector('#grade2').innerHTML = 'C';
    } else if (subjectScore2 >= 40) {
        document.querySelector('#grade2').innerHTML = 'D';
    } else {
        document.querySelector('#grade2').innerHTML = 'F';
    }

    if (subjectScore3 >= 70) {
        document.querySelector('#grade3').innerHTML = 'A';
    } else if (subjectScore3 >= 60) {
        document.querySelector('#grade3').innerHTML = 'B';
    } else if (subjectScore3 >= 50) {
        document.querySelector('#grade3').innerHTML = 'C';
    } else if (subjectScore3 >= 40) {
        document.querySelector('#grade3').innerHTML = 'D';
    } else {
        document.querySelector('#grade3').innerHTML = 'F';
    }

    if (subjectScore4 >= 70) {
        document.querySelector('#grade4').innerHTML = 'A';
    } else if (subjectScore4 >= 60) {
        document.querySelector('#grade4').innerHTML = 'B';
    } else if (subjectScore4 >= 50) {
        document.querySelector('#grade4').innerHTML = 'C';
    } else if (subjectScore4 >= 40) {
        document.querySelector('#grade4').innerHTML = 'D';
    } else {
        document.querySelector('#grade4').innerHTML = 'F';
    }

    if (subjectScore5 >= 70) {
        document.querySelector('#grade5').innerHTML = 'A';
    } else if (subjectScore5 >= 60) {
        document.querySelector('#grade5').innerHTML = 'B';
    } else if (subjectScore5 >= 50) {
        document.querySelector('#grade5').innerHTML = 'C';
    } else if (subjectScore5 >= 40) {
        document.querySelector('#grade5').innerHTML = 'D';
    } else {
        document.querySelector('#grade5').innerHTML = 'F';
    }

    document.querySelector('#totalremark').innerHTML = tRemark;


    document.querySelector('#grade2').innerHTML = grade;
    document.querySelector('#grade3').innerHTML = grade;
    document.querySelector('#grade4').innerHTML = grade;
    document.querySelector('#grade5').innerHTML = grade;






}