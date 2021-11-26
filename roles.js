const AccessControl = require("accesscontrol");
const ac = new AccessControl();

exports.roles = (function() {
ac.grant("user")
 .readOwn("profile")
  .updateOwn("profile")

ac.grant("owner")
 .readOwn("profile")
 .updateOwn("profile")

ac.grant("moderator")
 .extend("user")
 .readAny("profile")

ac.grant("admin")
 .extend("user")
 .extend("moderator")
 .updateAny("profile")
 .deleteAny("profile")

return ac;
})();
