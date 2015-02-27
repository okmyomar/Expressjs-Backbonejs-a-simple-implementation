(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['userEditor.hbs'] = template({"1":function(depth0,helpers,partials,data) {
    return "                <li><input type=\"text\" value=\""
    + this.escapeExpression(this.lambda(depth0, depth0))
    + "\"></li>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return "<div class=\"col-md-offset-5 col-md-3\">\n    <div class=\"form-login\">\n    <h4>Edit user</h4>\n    <input type=\"text\" id=\"userName\" class=\"form-control input-sm chat-input\" value=\""
    + this.escapeExpression(((helper = (helper = helpers.username || (depth0 != null ? depth0.username : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"username","hash":{},"data":data}) : helper)))
    + "\" readonly/>\n    </br>\n    <input type=\"password\" id=\"password\" class=\"form-control input-sm chat-input\" value=\"Its a secret\" readonly/>\n    </br>\n    <div>\n        Add the necessary roles<button id=\"addRoleBtn\" type=\"button\" class=\"btn btn-sm btn-primary\"><i>+</i></button>\n        <ul id=\"role-list\" class=\"list-unstyled\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.roles : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "        </ul>\n    </div>\n    <span id=\"messages\" class=\"error\"></span>\n    <div class=\"wrapper\">\n    <span class=\"group-btn\">\n        <button type=\"button\" id=\"save\" class=\"btn btn-primary btn-md\">Accept</i></button>\n    </span>\n    </div>\n    </div>\n</div>\n\n";
},"useData":true});
})();