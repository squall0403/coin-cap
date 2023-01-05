var app = angular.module("tng", []);

app.controller("paramsCtrl", ($scope) => {
    $scope.ppParams = [
        { internal_URL: "http://pp5backend.euwe.tyxr.net:8105" },
        { external_URL: "https://pp5-api.tixngo.io/v3" },
        { x_tixngo_key: "BMmDmV7S2dn+!IV1CCP,7,)<,osbBh0kf*FeSqpcZSc4(R.jf&lnD6I3<ntvqSaQ,AA<sG&&>GqWViKx7_fpFz+UOoLMaYoOQe?paj2)T9gT,jmH,tPW_KmNc<7-LaD<" },
        { apiURL: "https://pp5-api.tixngo.io/v3" }
    ]
    $scope.pParams = [
        { internal_URL: "http://p5backend.euwe.tyxr.net:8105" },
        { external_URL: "https://p5-api.tixngo.io/v3" },
        { x_tixngo_key: "5JS,db><kLj,D4U(Te89&QmUZUO)290LOfdQRouPq1BTRF(i3ec-C>>Y=s<1b3Jf3kb2i3AzZe6ekEPC4J(#A).u8oIBJ-qZpdD)pI9ZS)Rc!8dCgiS2sfWiNO,fp35E" },
        { apiURL: "https://p5-api.tixngo.io/v3" }
    ]

});

app.controller("instParamsCtrl", ($scope, $http) => {
    // Generate a pwd
    $http.get("https://www.passwordrandom.com/query?command=password&count=1&scheme=rnr!r-!nn!r-n!rn!-n!rn!-n!rn!")
        .then(function (response) {
            console.log(response);
        });
    $scope.instParams =
    {
        "admin": {
            "email": "wembley@tixngo.io",
            "password": "uSfc6-d5rWt-QvUGN-xC3Rh-Wfny7"
        },
        "organizer": {
            "webrooturl": "www.wembleystadium.com",
            "companyName": "Wembley Stadium",
            "email": "wembley@tixngo.io",
            "phone": "+4412345678910",
            "address": {
                "city": "London",
                "countryCode": "GB",
                "site": "London",
                "zip": "04177"
            }
        }
    }

})