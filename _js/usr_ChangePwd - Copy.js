jQuery(document).ready(function () {

    //$(".pwdTest").passStrength({
     
    //    userid: "user_id"		//required override

    //});

    $('#ContentPlaceHolder1_LinkButton1').button();
});

//Check for required password elements
function overallValid() {
    var tmpVal = false;
    var tb1 = $('#ContentPlaceHolder1_TextBox1').val();
    var tb2 = $('#ContentPlaceHolder1_TextBox2').val();
    var uid = $('#user_id').val();
    var pwd = '';

    if (pwdMatch(tb1, tb2) == true) {
        pwd = tb2;
    } else {
        alert('Password entries do not match');
        tmpVal = false;
    }
    
    if (pwd == '') {
        alert('Password cannot be blank');
        tmpVal = false;
    }       
    else if (charVal == true){
        alert('Password should not contain whitepaces');
        tmpVal = false;
    }
    else if (pwd == uid) {
        alert('Password cannot be the same as user id');
        tmpVal = false;
    }
    //else if(dopasswordsearch(pwd) == true) {
    else if(CheckPW(pwd) == true) {
        tmpVal = true;
    }
       
    //alert(tmpVal);

    return tmpVal;
}

function pwdMatch(tb1, tb2) {
    var tb1 = $('ContentPlaceHolder1_TextBox1').val();
    var tb2 = $('ContentPlaceHolder1_TextBox2').val();

    if (tb1 == tb2) {
        return true;
    } else {
        return false;
    }
}

function reqPwdVal(tb1, tb2) {
    var lnth = false;
    
    //Password length
    if ((tb1.length >= 8) && (tb2.length >= 8)) {
        lnth = true;
    }

    return lnth;
}

function charVal(pwd) {
    var checkWS = false;

    checkWS = hasWhiteSpace(pwd);

    return checkWS;

}
function charTest(pwd) {
    var sumTest = 0;


}
function hasWhiteSpace(s) {
    var testVal = false;
    reWhiteSpace = new RegExp(/\s/);
    // Check for white space
    if (reWhiteSpace.test(s)) {
        //alert("Please Check Your Fields For Spaces");
        testVal = true;
    }
    return testVal;
}

//function checkqwerty(password) {
//    var qwerty = "qwertyuiopasdfghjklzxcvbnm";
//    var tmpVal = false;
//    password = password.toLowerCase();
//    for (var qi = 0, pi = 0; pi < password.length && qi < qwerty.length; qi++) {
//        if (password.charAt(pi) == qwerty.charAt(qi)) {
//            pi++;
//        }
//    }
//    if (pi != password.length) {
//        //alert('invalid');
//        tmpVal = true;
//    }
//}

function repDigitGroups(str) {
    //check for adjacent numeric digits in string
    var matches = str.match(/(\d)\1+/g);
    try { result = matches.length; }
    catch (e) { result = 0; }
    return result;
}

//function contiguouschars(str) {
//    var qwerty = "qwertyuiopasdfghjklzxcvbnm";
//    var num = "1234567890";
//    var tmpVal = false;
//    for (var i = 0; i < str.length - 3; i++) {
//        var ss = str.substring(i, i + 4);
//        var reg = new RegExp(ss);
//        var testStr = (Number(ss)) ? num : qwerty;
//        if (reg.test(testStr)) {
//            tmpVal = true;
//            alert("'" + ss + "' is illegal");
//        }
//    }
//}

//function dopasswordsearch(password) {
//    myRegExp = /[0-9]+/g; //check for numerics
//    myRegExp1 = /[A-Z]+/g;  //check for lower case alphas
//    myRegExp2 = /[a-z]+/g;  //check for upper case alphas
//    myRegExp3 = /\d{4,}/g;  //check for >3 contiguous numerics
//    myRegExp4 = /\D{4,}/g;  //check for >3 contiguous alphas
//    myRegExp5 = /(\d)\1+/g;  //check for >1 same numeric chars adjacent to one another
//    myRegExp6 = /(\D)\1+/g;  //check for >1 same alpha chars adjacent to one another
//    //myRegExp3and4= /[\d{4,}|\D{4,}]/g; // check for >3 contiguous numerics or alphas
//    //myRegExp5and6=/[\w]{2,}/g; //check for >2 same numeric/alpha chars adjacent to one another
//    myRegExp5and6 = /[\w]{3,}/g;
//    myNumber = new String(password)
//    var url;
//    var error_message = '';
//    var isValid = true;

//    if (password.length < 8) {
//        error_message = error_message + "All Passwords must be at least 8 characters long. \n";
//        //url = "password_checker_validate.asp?error_message=" + escape(error_message) + "&password=" + escape(password) + "&error_level=1";
//        isValid = false;
//        //document.form1.action = url;
//        //document.form1.submit();
//    }
//    else if (!myRegExp.test(myNumber)) {
//        error_message = error_message + "All Passwords must contain at least one numeric character. \n";
//        //var url = "password_checker_validate.asp?error_message=" + escape(error_message) + "&password=" + escape(password) + "&error_level=2 ";
//        isValid = false;
//        //document.form1.action = url;
//        //document.form1.submit();
//    }
//    else if (!myRegExp1.test(myNumber)) {
//        error_message = error_message + "All Passwords must contain at least one Upper Case character. \n";
//        //var url = "password_checker_validate.asp?error_message=" + escape(error_message) + "&password=" + escape(password) + "&error_level=3 ";
//        isValid = false;
//        //document.form1.action = url;
//        //document.form1.submit();
//    }
//    else if (!myRegExp2.test(myNumber)) {
//        error_message = error_message + "All Passwords must contain at least one Lower Case character. \n";
//        //var url = "password_checker_validate.asp?error_message=" + escape(error_message) + "&password=" + escape(password) + "&error_level=4 ";
//        isValid = false;
//        //document.form1.action = url;
//        //document.form1.submit();
//    }
//        // fix below
//    else if (!myRegExp5and6.test(myNumber)) {
//        error_message = error_message + "All Passwords must not contain 3 same characters adjacent to each other. \n";
//        //var url = "password_checker_validate.asp?error_message=" + escape(error_message) + "&password=" + escape(password) + "&error_level=6 ";
//        isValid = false;
//        //document.form1.action = url;
//        //document.form1.submit();
//    }
//    else if (contiguouschars2(myNumber) == 0) {
//        error_message = error_message + "All Passwords must not contain > 3 contiguous characters. \n";
//        //var url = "password_checker_validate.asp?error_message=" + escape(error_message) + "&password=" + escape(password) + "&error_level=8 ";
//        isValid = false;
//        //document.form1.action = url;
//        //document.form1.submit();
//    }
//    else if (checkqwerty(myNumber) == 0) {
//        error_message = error_message + "All Passwords must not follow qwerty keyboard sequences. \n";
//        //var url = "password_checker_validate.asp?error_message=" + escape(error_message) + "&password=" + escape(password) + "&error_level=9 ";
//        isValid = false;
//        //document.form1.action = url;
//        //document.form1.submit();
//    }
//    else {
//        error_message = error_message + "Logically Structured password.";
//        //var url = "password_checker_validate.asp?error_message=" + escape(error_message) + "&password=" + escape(password) + "&error_level=10 ";
//        isValid = true;
//        //document.form1.action = url;
//        //document.form1.submit();
//    }
    
//    if (error_message != '') {
//        error_message = error_message + "\n\n Please try again.";
//        alert(error_message);

//    }
//    return isValid;

//}

//function checkqwerty(password) {
//    //string to test against
//    var qwerty = "qwertyuiopasdfghjklzxcvbnm";
//    //set to lowercase
//    password = password.toLowerCase();
//    for (var qi = 0, pi = 0; pi < password.length && qi < qwerty.length; qi++) {
//        //for each char in password and qwerty string
//        //if both positions match
//        //increment pi, so next time they will be out of zinc if it 
//        //continues in qwerty sequence
//        if (password.charAt(pi) == qwerty.charAt(qi)) {
//            pi++;
//        }
//    }
//    if (pi != password.length)
//    { return 0; } //invalid password}
//    else
//    { return 1; } //valid}
//}

//function contiguouschars(str) {
//    var myRegExp = /[\d|\D]{4,}/g;
//    //var str = document.getElementById('password').value.match(myRegExp);
//    var allowed = true;
//    for (var i = 0; i < str.length; i++) {
//        for (var s = 0; s < 4; s++) {
//            if (str[i].charCodeAt(s) > str[i].charCodeAt(s + 1)) {
//                allowed = false;
//                break;
//            }
//        }
//        if (!allowed)
//        { return 0; } //invalid password}
//        else
//        { return 1; } //valid}
//    }
//}
//function contiguouschars2(str) {
//    var qwerty = "abcdefghijklmnopqrstuvwxyz";
//    var num = "1234567890";
//    var str = document.getElementById('password').value.toLowerCase();
//    for (var i = 0; i < str.length - 3; i++) {
//        var ss = str.substring(i, i + 4);
//        var reg = new RegExp(ss);
//        var testStr = (Number(ss)) ? num : qwerty;
//        if (reg.test(testStr)) { alert("'" + ss + "' is illegal"); }
//    }
//}

function passwordStrength(password)
{
	var desc = new Array();
	desc[0] = "Very Weak";
	desc[1] = "Weak";
	desc[2] = "Better";
	desc[3] = "Medium";
	desc[4] = "Strong";
	desc[5] = "Strongest";
 
	var score   = 0;
 
	//if password bigger than 8 give 1 point
	if (password.length > 7) score++;
 
	//if password has both lower and uppercase characters give 1 point	
	if ( ( password.match(/[a-z]/) ) && ( password.match(/[A-Z]/) ) ) score++;
 
	//if password has at least one number give 1 point
	if (password.match(/\d+/)) score++;
 
	//if password has at least one special caracther give 1 point
	if ( password.match(/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/) )	score++;
 
	//if password bigger than 12 give another 1 point
	if (password.length > 12) score++;
 
	 document.getElementById("passwordDescription").innerHTML = desc[score];
	 document.getElementById("passwordStrength").className = "strength" + score;
}


var qwerty = "qwertyuiopasdfghjklzxcvbnm";
var liberr = new Array();
liberr[0] = "Password must be at least 8 characters long";
liberr[1] = "Password must contain at least 1 digit";
liberr[2] = "Password must contain at least 1 uppercase letter";
liberr[3] = "Password must contain at least 1 lowercase letter";
liberr[4] = "Password must not contain identical adjacent characters";
liberr[5] = "Password must not contain 4 sequential characters (up or down)";
liberr[6] = "Password letters must not follow qwerty sequence";
liberr[7] = "Password must contain only uppercase/lowercase letters and digits";
liberr[8] = "Password must contain 1 special character";

function CheckPW(pw) {
    var taberr = new Array();
    taberr = [false, false, false, false, false, false, false, false, false];
    var lpw = pw.length;
    var INbChar = (lpw < 8);
    var IDigit = (!(pw.match(/[0-9]/)));
    var IUpper = (!(pw.match(/[A-Z]/)));
    var ILower = (!(pw.match(/[a-z]/)));
    //var ISpec = (!(pw.match(/[\[\]\^\$\.\|\?\*\+\(\)\\~`\!\@\#\%\&\-\_\+\=\{\}]{1,} /)));
    var ISpec = ((pw.match(/^\W+$/)));
    var IAdjac = false;
    var ISeq = false;
    var pw1 = pw.replace(/(\W)|([\d])/g, "");
    var lpw1 = pw1.length;
    var IQwerty = (lpw1 > 3); // check only if 4 or more letters
    var NbCharOk = 0;
    var c, c0, c1, c2, c3, cc, diffseq;
    var iqw = 0;
    var old_iqw = 0;
    for (var i = 0; i < lpw; i++) {
        c = pw.charAt(i);
        c0 = c.charCodeAt(0);
        if (c.match(/^[0-9]|[A-Z]$/i)) {
            NbCharOk++;
            if (i < (lpw - 2)) { // adjacent characters ?
                c1 = pw.charCodeAt(i + 1);
                c2 = pw.charCodeAt(i + 2);
                if ((c0 == c1) && (c1 == c2)) IAdjac = true;
                if (i < (lpw - 3)) {
                    c2 = pw.charCodeAt(i + 2);
                    c3 = pw.charCodeAt(i + 3);
                    diffseq = c1 - c0;
                    if (Math.abs(diffseq) == 1) {
                        if (((c2 - c1) == diffseq) && ((c3 - c2) == diffseq)) ISeq = true;
                    }
                }
            }
            if (lpw1 > 3) { // qwerty sequence ?
                if (c.match(/^[A-Z]$/i)) {
                    cc = c.toLowerCase();
                    iqw = qwerty.indexOf(cc, old_iqw);
                    if (iqw < old_iqw) IQwerty = false;
                    old_iqw = iqw;
                }
            }
        }
    }
    taberr[0] = INbChar;
    taberr[1] = IDigit;
    taberr[2] = IUpper;
    taberr[3] = ILower;
    taberr[4] = IAdjac;
    taberr[5] = ISeq;
    taberr[6] = IQwerty;
    //taberr[7] = (NbCharOk < lpw);
    taberr[7] = false;
    taberr[8] = ISpec;
    var msg = "";
    for (var j = 0; j < taberr.length; j++) {
        if (taberr[j]) { msg += liberr[j] + "\n"; }
    }
    var retVal = false;

    if (!msg.length) {
        //msg = "Password ok";
        retVal = true;
    } else {
        retVal = false;
        alert(msg);
    }
    
    return retVal;
}
