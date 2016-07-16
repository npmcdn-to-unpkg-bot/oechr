System.register(['@angular/core', '@angular/router-deprecated', './../services/post.service'], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, post_service_1;
    var PostComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (post_service_1_1) {
                post_service_1 = post_service_1_1;
            }],
        execute: function() {
            PostComponent = (function () {
                function PostComponent(routeParams, postService) {
                    this.routeParams = routeParams;
                    this.postService = postService;
                    var __this = this;
                    this.postId = routeParams.get("postId");
                    postService.getPost(__this.postId).subscribe(function (res) {
                        __this.post = res.json();
                    });
                }
                PostComponent = __decorate([
                    core_1.Component({
                        providers: [post_service_1.PostService],
                        inputs: ['postId'],
                        selector: 'post',
                        templateUrl: '../templates/post.component.html',
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof router_deprecated_1.RouteParams !== 'undefined' && router_deprecated_1.RouteParams) === 'function' && _a) || Object, post_service_1.PostService])
                ], PostComponent);
                return PostComponent;
                var _a;
            }());
            exports_1("PostComponent", PostComponent);
        }
    }
});