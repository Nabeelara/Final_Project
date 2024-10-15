window.WebPushNotification = window.WebPushNotification || function () {
    var self = this;
    this.messaging = null;
    this.loading = false;
    this.config = {
        apiKey: "AIzaSyAaf-4vaiqhH8HTRyq4zWkCFoX9x82cdsU",
        authDomain: "web-notifications-c3ca0.firebaseapp.com",
        databaseURL: "https://web-notifications-c3ca0.firebaseio.com",
        projectId: "web-notifications-c3ca0",
        storageBucket: "web-notifications-c3ca0.appspot.com",
        messagingSenderId: "543434318086"
    };

    // Инициализиция экземпляра приложения Firebase
    this.initializeFirebase = function (config = {}) {
        firebase.initializeApp(config);
    };

    // Получяем Messaging службу для приложения по умолчанию
    this.getMessagingFirebase = function () {
        return firebase.messaging();
    };

    // Проверка поддержки пушей
    this.checkSupport = function () {
        return window.location.protocol === 'https:'
            && 'Notification' in window
            && 'serviceWorker' in navigator
            && 'localStorage' in window
            && 'fetch' in window
            && 'postMessage' in window;
    };

    // Обработка ошибок
    this.handleError = function () {
        if (window.location.protocol !== 'https:') {
            console.error('Is not from HTTPS');
        } else if (!('Notification' in window)) {
            console.error('Notification not supported');
        } else if (!('serviceWorker' in navigator)) {
            console.error('ServiceWorker not supported');
        } else if (!('localStorage' in window)) {
            console.error('LocalStorage not supported');
        } else if (!('fetch' in window)) {
            console.error('fetch not supported');
        } else if (!('postMessage' in window)) {
            console.error('postMessage not supported');
        }

        console.warn('This browser does not support desktop notification.');
        console.log('Is HTTPS', window.location.protocol === 'https:');
        console.log('Support Notification', 'Notification' in window);
        console.log('Support ServiceWorker', 'serviceWorker' in navigator);
        console.log('Support LocalStorage', 'localStorage' in window);
        console.log('Support fetch', 'fetch' in window);
        console.log('Support postMessage', 'postMessage' in window);
    };

    // Запрос TOKEN
    this.getToken = function () {
        if (!!self.messaging) {
            // запрашиваем разрешение на получение уведомлений
            self.messaging.requestPermission().then((permission) => {
                self.messaging.getToken().then((token) => {
                    console.log('token', token);
                    if (token) {
                        self.sendTokenToServer(token);
                    } else {
                        console.warn('Не удалось получить токен.');
                    }
                });
            }).catch((error) => {
                console.error('Не удалось получить разрешение на показ уведомлений.', error);
            });
        } else {
            console.error('Не удалось создать приложение');
        }
    };

    // Отправка TOKEN на сервер
    this.sendTokenToServer = function (token) {
        fetch('https://push.rt.com/fcm/register/' + ((window.rbthConf && window.rbthConf.lang) || 'test') + '/' + token, {
            'method': 'POST',
            'Content-Type': 'application/json'
        }).then((res) => {
            // Если подписка разрешена, то получим объект с данными подписки
            console.log('Токен успешно отправлен на сервер!', res);
        }).catch((error) => {
            console.error('При отправке токен на сервер произошла ошибка!', error);
        });
    };

    // init
    this.init = function () {
        self.initializeFirebase(self.config);
        self.messaging = self.getMessagingFirebase();
        self.getToken();
    };

    // addFirebaseScript
    this.addFirebaseScript = function () {
        var s = document.getElementsByTagName('script')[0];
        var p = document.createElement('script');

        p.async = 'async';
        p.src = '/rbth/js/pushes/firebase.js?v=13';
        p.onload = function () {
            console.debug(`Firebase finish loading`);
            self.init();
        };
        s.parentNode.insertBefore(p, s);
        console.debug(`WebPushNotification init`);
    };

    // created
    this.created = function () {
        if (self.checkSupport()) {
            self.addFirebaseScript();
        } else {
            self.handleError();
        }
    };

    return this;
};

new window.WebPushNotification().created();
