System.register(['@angular/core', '@angular/router-deprecated', './../services/user.service', './../services/notification.service', './../models/notification'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_deprecated_1, user_service_1, notification_service_1, notification_1;
    var MyJobPostsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (notification_service_1_1) {
                notification_service_1 = notification_service_1_1;
            },
            function (notification_1_1) {
                notification_1 = notification_1_1;
            }],
        execute: function() {
            MyJobPostsComponent = (function () {
                function MyJobPostsComponent(userService, notificationService) {
                    this.userService = userService;
                    this.notificationService = notificationService;
                    this.items = [];
                    this.checkedItemsList = [];
                    var __this = this;
                    this.userService.getJobPosts().subscribe(function (res) {
                        __this.items = res.json();
                    });
                }
                MyJobPostsComponent.prototype.toggleAllItems = function () {
                    this.allItemsChecked = !this.allItemsChecked;
                    if (this.allItemsChecked) {
                        var checkedItemsListId = [];
                        for (var i = 0; i < this.items.length; i++) {
                            checkedItemsListId.push(this.items[i].id);
                        }
                        this.checkedItemsList = checkedItemsListId;
                    }
                    else {
                        this.checkedItemsList = [];
                    }
                };
                MyJobPostsComponent.prototype.saveCheckedItem = function (itemId) {
                    var indexOfItemId = this.checkedItemsList.indexOf(itemId);
                    if (indexOfItemId == -1) {
                        this.checkedItemsList.push(itemId);
                    }
                    else {
                        this.checkedItemsList.splice(indexOfItemId, 1);
                    }
                    if (this.checkedItemsList.length != this.items.length) {
                        this.allItemsChecked = false;
                    }
                    else {
                        this.allItemsChecked = true;
                    }
                };
                MyJobPostsComponent.prototype.deleteSelectedItems = function () {
                    var _this = this;
                    var __this = this;
                    var parsedListItemId = this.checkedItemsList.join(',');
                    this.userService.deleteMyJobPosts(parsedListItemId).subscribe(function (res) {
                        __this.userService.getJobPosts().subscribe(function (res) {
                            __this.items = res.json();
                            __this.notificationService.show(new notification_1.Notification('success', 'Ces expériences ont bien été supprimées'));
                            _this.checkedItemsList = [];
                            _this.allItemsChecked = false;
                        });
                    });
                };
                MyJobPostsComponent = __decorate([
                    core_1.Component({
                        selector: 'my-job-posts',
                        providers: [user_service_1.UserService],
                        directives: [router_deprecated_1.RouterLink],
                        templateUrl: '../templates/my-job-posts.component.html'
                    }), 
                    __metadata('design:paramtypes', [user_service_1.UserService, notification_service_1.NotificationsService])
                ], MyJobPostsComponent);
                return MyJobPostsComponent;
            }());
            exports_1("MyJobPostsComponent", MyJobPostsComponent);
        }
    }
});
