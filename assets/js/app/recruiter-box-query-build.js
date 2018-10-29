var ListOpeningQueryBuilder = function(client) {
    var client_name = client;
    var tags = '';
    var city = '';
    var country = '';
    var state = '';
    var title = '';
    var description = '';
    var allows_remote = '';
    var position_type = '';
    var team = '';
  
    return {
      withClientName: function(pclient_name) {
        client_name = pclient_name;
        return this;
      },
      withTags: function(ptags) {
        tags = ptags;
        return this;
      },
      withCity: function(pcity) {
        city = pcity;
        return this;
      },
      withCountry: function(pcountry) {
        country = pcountry;
        return this;
      },
      withState: function(pstate) {
        state = pstate;
        return this;
      },
      withTitle: function(ptitle) {
        title = ptitle;
        return this;
      },
      withDescription: function(pdescription) {
        description = pdescription;
        return this;
      },
      withAllowsRemote: function(pallows_remote) {
        allows_remote = pallows_remote;
        return this;
      },
      withPositionType: function(pposition_type) {
        position_type = pposition_type;
        return this;
      },
      withTeam: function(pteam) {
        team = pteam;
        return this;
      },
      buildParams: function() {
        return {
            client_name : client_name,
            tags : tags,
            city : city,
            country : country,
            state : state,
            title : title,
            description : description,
            allows_remote : allows_remote,
            position_type : position_type,
            team : team
        };
      }
    }
  }