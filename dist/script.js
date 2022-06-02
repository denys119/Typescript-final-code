"use strict";
// Enum
const ADMIN = 'admin';
const USER = 'user';
const user = {
    name: 'Denis',
    role: ADMIN
};
var Roles;
(function (Roles) {
    Roles["ADMIN"] = "admin";
    Roles["USER"] = "user";
})(Roles || (Roles = {}));
const user2 = {
    name: 'Denis',
    role: Roles.ADMIN
};
