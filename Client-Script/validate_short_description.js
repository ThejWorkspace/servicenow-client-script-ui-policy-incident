function onSubmit() {
    var shortDesc = g_form.getValue('short_description').trim();

    if (shortDesc.length < 10) {
        g_form.addErrorMessage(
            'Short Description must contain at least 10 characters.'
        );

        g_form.showFieldMsg(
            'short_description',
            'Please enter a more descriptive incident summary.',
            'error'
        );

        return false;
    }

    return true;
}
