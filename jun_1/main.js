function toggleSideBar() {
    document.getElementById('nav_bar').style.display =
        document.getElementById('nav_bar').style.display ===
        'none' ? 'block' : 'none';
}

function arrayShift() {
    const length = document.getElementById('array_size').value;
    const shift = document.getElementById('array_shift').value;
    let arr = Array.from({length}, () => Math.floor(Math.random() * 100));
    let res = 'Before: ';
    arr.forEach((elem) => {
        res += elem + ', ';
    });
    res = res.substring(0, res.length - 2);

    for (let i = 0; i < shift; i++) {
        arr.unshift(arr.pop());
    }

    res += '\n After:';
    arr.forEach((elem) => {
        res += elem + ', ';
    });
    res = res.substring(0, res.length - 2);

    document.getElementById('array_shift_result').innerText = res;
}

function validateSubstrInputs() {
    let X = document.getElementById('substr_text1').value;
    let Y = document.getElementById('substr_text2').value;

    document.getElementById('content_page_substring_btn').disabled = !(X && Y);

}

function maxSubstring() {
    let X = document.getElementById('substr_text1').value;
    let Y = document.getElementById('substr_text2').value;
    let m = X.length;
    let n = Y.length;
    let LCSuff = new Array(m + 1);
    let len = 0;
    let row = 0, col = 0;

    for (let i = 0; i <= m; i++) {
        LCSuff[i] = Array(n + 1);
        for (let j = 0; j <= n; j++) {
            LCSuff[i][j] = 0;
            if (i === 0 || j === 0)
                LCSuff[i][j] = 0;

            else if (X[i - 1] === Y[j - 1]) {
                LCSuff[i][j] = LCSuff[i - 1][j - 1] + 1;
                if (len < LCSuff[i][j]) {
                    len = LCSuff[i][j];
                    row = i;
                    col = j;
                }
            } else {
                LCSuff[i][j] = 0;
            }
        }
    }

    if (len === 0) {
        document.write("No Common Substring");
        return;
    }

    let resultStr = "";
    while (LCSuff[row][col] !== 0) {
        resultStr = X[row - 1] + resultStr;
        --len;
        row--;
        col--;
    }

    document.getElementById('content_page_substring_res').innerText = resultStr;
}

function toggleElement(elName) {
    const curr = document.getElementById(elName).style.visibility;
    document.getElementById(elName).style.visibility = curr === 'hidden' ? 'visible' : 'hidden';
}

function toggleAll() {
    toggleElement('header');
    toggleElement('header_float_right');
    toggleElement('content_page_substring');
    let checkboxes = document.querySelectorAll('input[type=checkbox]');

    if (document.getElementById('cb_all').checked) {
        for (let cb of checkboxes) {
            cb.checked = 'checked';
        }
    } else {
        for (let cb of checkboxes) {
            cb.checked = false;
        }
    }
}
