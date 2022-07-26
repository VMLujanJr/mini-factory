function login() {
    const usernameInput = $("#usernameInput");
    const passwordInput = $("#passwordInput");

    const username = usernameInput.val();
    const password = passwordInput.val();

    let valid = true;
    let errorMessage = "<ul>";

    if(!username) {
        valid = false;
        usernameInput.css('background-color' , '#FF0000'); //example css
        errorMessage = errorMessage + "<li>User is required</li>";
    }
    if(!password) {
        valid = false;
        passwordInput.css('background-color' , '#FF0000'); //example css
        errorMessage = errorMessage + "<li>Password is required</li>";
    }

    if(valid) {
        const requestBody = { user_name: username, password: password };
        $.ajax({
            type: 'post',
            url: './api/sessions/',
            data: JSON.stringify(requestBody),
            contentType: "application/json; charset=utf-8",
            traditional: true,
            success: function (data) {
                $("#logInForm").hide();
                const messageBlock = $("#logInMessage");
                messageBlock.html("User logged in");
                messageBlock.show();
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                $("#logInForm").hide();
                const messageBlock = $("#logInMessage");
                messageBlock.html("Problems while loggin in user");
                messageBlock.show();
            }
        });
    } else {
        errorMessage = errorMessage + "</ul>";
        const errorMessageBlock = $("#errorMessage");
        errorMessageBlock.html(errorMessage);
        errorMessageBlock.show();
    }
}