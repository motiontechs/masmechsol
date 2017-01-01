(function () {
    var masmechsolApp = angular.module('masmechsolApp.directives', []);

    masmechsolApp.directive('validateName', function () {
        return {
            require: 'ngModel',
            restrict: 'A',
            link: function (scope, element, attrs, ctrl) {
                var Name_Regx = /^[a-zA-Z ]*$/;
                function inputValue(val) {
                    if (Name_Regx.test(val) && val.length<=100) {
                        ctrl.$setViewValue(val);
                        ctrl.$render();
                    }
                    else {
                        return undefined;
                    }
                    return val;
                }
                ctrl.$parsers.push(inputValue);
            }
        };
    });

    masmechsolApp.directive('validateMobile', function () {
        return {
            require: 'ngModel',
            restrict: 'A',
            link: function (scope, element, attrs, ctrl) {
                function inputValue(val) {
                    if (val) {
                        var digits = val.replace(/[^0-9]/g, '');
                        if (digits !== val) {
                            ctrl.$setViewValue(digits);
                            ctrl.$render();
                        }
                        else if (val.length !== 10) {
                            return undefined;
                        }
                        return parseFloat(digits);
                    }
                    return undefined;
                }
                ctrl.$parsers.push(inputValue);
            }
        };
    });

    masmechsolApp.directive('validateNumbers', function () {
        return {
            require: 'ngModel',
            restrict: 'A',
            link: function (scope, element, attrs, ctrl) {
                function inputValue(val) {
                    if (val) {
                        var digits = val.replace(/[^0-9.]/g, '');
                        if (digits !== val) {
                            ctrl.$setViewValue(digits);
                            ctrl.$render();
                        }
                        return parseFloat(digits);
                    }
                    return undefined;
                }
                ctrl.$parsers.push(inputValue);
            }
        };
    });

    masmechsolApp.directive('validateEmail', function () {
        var EMAIL_REGEXP = /^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
        return {
            require: 'ngModel',
            restrict: '',
            link: function (scope, elm, attrs, ctrl) {
                // only apply the validator if ngModel is present and Angular has added the email validator
                if (ctrl && ctrl.$validators.email) {
                    // this will overwrite the default Angular email validator
                    ctrl.$validators.email = function (modelValue) {
                        return ctrl.$isEmpty(modelValue) || EMAIL_REGEXP.test(modelValue);
                    };
                }
            }
        };
    });

    masmechsolApp.directive('phoneInput', function () {
        return {
            require: 'ngModel',
            restrict: 'A',
            link: {
                pre: function (scope, elem, attr, ctrl) {
                    elem.attr("maxlength", "14");
                    elem.attr("placeholder", "(000) 000-0000");
                    if (elem.attr('required') == 'required' && elem.val().length <= 0 || elem.val() == undefined) {
                        elem.addClass('redborder');
                    }
                    ctrl.$formatters.push(function (string) {
                        if (string != null && string != undefined && string.length > 0) {
                            string = string.replace('(', '').replace(')', '').replace('-', '').replace(' ', '');
                            string = '(' + string.slice(0, 3) + ') ' + string.slice(3, 6) + '-' + string.slice(6, 10);
                            angular.element(elem).removeClass('redborder');
                            return string;
                        }
                    });
                },
                post: function (scope, elem, attr, ctrl) {
                    elem.on('keypress', function (e) {
                        var kc = e.which ? e.which : e.keyCode;
                        if (kc >= 47 && kc <= 58 || kc == 40 || kc == 41 || kc == 8 || kc == 9 || kc == 0 || kc == 32 || kc == 35 || kc == 36 || kc == 45 || kc == 46) {
                            return true;
                        }
                        else {
                            return false;
                        }
                    });
                    elem.bind('blur', function () {
                        var PhoneNo = elem.val();
                        var regex = /^[0-9]*$/;
                        if (elem.attr('required') == 'required') {
                            if ((PhoneNo.length < 10) || (!regex.test(PhoneNo) && PhoneNo.length >= 10 && PhoneNo.length < 14)) {
                                elem.addClass("redborder");
                            }
                            else {
                                elem.removeClass("redborder");
                                PhoneNo = PhoneNo.replace('(', '').replace(')', '').replace('-', '').replace(' ', '');
                                PhoneNo = '(' + PhoneNo.slice(0, 3) + ') ' + PhoneNo.slice(3, 6) + '-' + PhoneNo.slice(6, 10);
                                elem.val(PhoneNo);
                            }
                        }
                        else {
                            if (PhoneNo.length == 0) {
                                elem.val('');
                                elem.removeClass("redborder");
                            }
                            else if ((PhoneNo.length < 10) || (!regex.test(PhoneNo) && PhoneNo.length >= 10 && PhoneNo.length < 14)) {
                                elem.addClass("redborder");
                            }
                            else {
                                elem.removeClass("redborder");
                                PhoneNo = PhoneNo.replace('(', '').replace(')', '').replace('-', '').replace(' ', '');
                                PhoneNo = '(' + PhoneNo.slice(0, 3) + ') ' + PhoneNo.slice(3, 6) + '-' + PhoneNo.slice(6, 10);
                                elem.val(PhoneNo);
                            }
                        }
                    });
                }
            }
        };
    });

    masmechsolApp.directive('zipcodeInput', function () {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: {
                pre: function (scope, elem, attr, ctrl) {
                    elem.attr("maxlength", "10");
                    elem.attr("placeholder", "00000-0000");
                    if (elem.attr('required') == 'required' && elem.val().length <= 0 || elem.val() == undefined) {
                        elem.addClass('redborder');
                    }
                    ctrl.$formatters.push(function (string) {
                        if (string != null && string != undefined && string.length > 0) {
                            string = string.replace('-', '').replace(' ', '');
                            if (string.length == 5) {
                                string = string.slice(0, 5);
                                angular.element(elem).removeClass('redborder');
                            }
                            else if (string.length >= 9) {
                                string = string.slice(0, 5) + '-' + string.slice(5, 9);
                                angular.element(elem).removeClass('redborder');
                            }
                            else {
                                angular.element(elem).addClass('redborder');
                            }
                            return string;
                        }
                    });
                },
                post: function (scope, elem, attr, ctrl) {
                    elem.on('keypress', function (e) {
                        var kc = e.which ? e.which : e.keyCode;
                        if (kc >= 47 && kc <= 58 || kc == 40 || kc == 41 || kc == 8 || kc == 9 || kc == 0 || kc == 32 || kc == 35 || kc == 36 || kc == 45 || kc == 46) {
                            return true;
                        }
                        else {
                            return false;
                        }
                    });
                    elem.bind('blur', function () {
                        var ZipCode = elem.val();
                        ZipCode = ZipCode.replace('-', '').replace(' ', '');
                        if (ZipCode.length == 5) {
                            ZipCode = ZipCode.slice(0, 5);
                            elem.removeClass("redborder");
                        }
                        else if (ZipCode.length >= 9) {
                            ZipCode = ZipCode.slice(0, 5) + '-' + ZipCode.slice(5, 9);
                            elem.removeClass("redborder");
                        }
                        else {
                            elem.addClass("redborder");
                        }
                        elem.val(ZipCode);
                    });
                }
            }
        };
    });


})();