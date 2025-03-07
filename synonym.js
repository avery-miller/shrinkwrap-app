const countrySynonyms = new Map([
    ["Afghanistan", ["Afghanistan"]],
    ["Aland Islands", ["Aland Islands", "Aland"]],
    ["Albania", ["Albania"]],
    ["Algeria", ["Algeria"]],
    ["American Samoa", ["American Samoa", "US Samoa"]],
    ["Andorra", ["Andorra"]],
    ["Angola", ["Angola"]],
    ["Anguilla", ["Anguilla"]],
    ["Antarctica", ["Antarctica"]],
    ["Antigua and Barbuda", ["Antigua and Barbuda", "Antigua", "Barbuda"]],
    ["Argentina", ["Argentina"]],
    ["Armenia", ["Armenia"]],
    ["Aruba", ["Aruba"]],
    ["Australia", ["Australia"]],
    ["Austria", ["Austria"]],
    ["Azerbaijan", ["Azerbaijan"]],
    ["Bahamas", ["Bahamas"]],
    ["Bahrain", ["Bahrain"]],
    ["Bangladesh", ["Bangladesh"]],
    ["Barbados", ["Barbados"]],
    ["Belarus", ["Belarus"]],
    ["Belgium", ["Belgium"]],
    ["Belize", ["Belize"]],
    ["Benin", ["Benin"]],
    ["Bermuda", ["Bermuda"]],
    ["Bhutan", ["Bhutan"]],
    ["Bolivia", ["Bolivia"]],
    ["Bosnia and Herzegovina", ["Bosnia and Herzegovina", "Bosnia", "Herzegovina"]],
    ["Botswana", ["Botswana"]],
    ["Brazil", ["Brazil"]],
    ["British Indian Ocean Territory", ["British Indian Ocean Territory", "British Indian Ocean Islands", "BIOT"]],
    ["Brunei", ["Brunei"]],
    ["Bulgaria", ["Bulgaria"]],
    ["Burkina Faso", ["Burkina Faso"]],
    ["Burundi", ["Burundi"]],
    ["Cabo Verde", ["Cabo Verde", "Cape Verde"]],
    ["Cambodia", ["Cambodia"]],
    ["Cameroon", ["Cameroon"]],
    ["Canada", ["Canada"]],
    ["Cayman Islands", ["Cayman Islands", "Cayman"]],
    ["Central African Republic", ["Central African Republic", "CAR", "Central Africa"]],
    ["Chad", ["Chad"]],
    ["Chile", ["Chile"]],
    ["China", ["China"]],
    ["Christmas Island", ["Christmas Island", "Christmas"]],
    ["Cocos Islands", ["Cocos Islands", "Keeling Islands", "Cocos", "Keeling"]],
    ["Colombia", ["Colombia"]],
    ["Comoros", ["Comoros"]],
    ["Cook Islands", ["Cook Islands", "Cook"]],
    ["Costa Rica", ["Costa Rica"]],
    ["Croatia", ["Croatia"]],
    ["Cuba", ["Cuba"]],
    ["Curacao", ["Curacao"]],
    ["Cyprus", ["Cyprus"]],
    ["Czech Republic", ["Czech Republic", "Czechia"]],
    ["Ivory Coast", ["Ivory Coast", "Cote d'Ivoire"]],
    ["Democratic Republic of the Congo", ["Democratic Republic of the Congo", "DRC", "Congo-Kinshasa"]],
    ["Denmark", ["Denmark"]],
    ["Djibouti", ["Djibouti"]],
    ["Dominica", ["Dominica"]],
    ["Dominican Republic", ["Dominican Republic"]],
    ["Ecuador", ["Ecuador"]],
    ["Egypt", ["Egypt"]],
    ["El Salvador", ["El Salvador"]],
    ["Equatorial Guinea", ["Equatorial Guinea"]],
    ["Eritrea", ["Eritrea"]],
    ["Estonia", ["Estonia"]],
    ["Eswatini", ["Eswatini", "Swaziland"]],
    ["Ethiopia", ["Ethiopia"]],
    ["Falkland Islands", ["Falkland Islands", "Falkland"]],
    ["Faroe Islands", ["Faroe Islands", "Faroe"]],
    ["Micronesia", ["Micronesia", "FSM"]],
    ["Fiji", ["Fiji"]],
    ["Finland", ["Finland"]],
    ["France", ["France"]],
    ["French Polynesia", ["French Polynesia", "Polynesia"]],
    ["French Southern Territories", ["French Southern Territories", "Southern Territories", "FST"]],
    ["Gabon", ["Gabon"]],
    ["Gambia", ["Gambia"]],
    ["Georgia", ["Georgia"]],
    ["Germany", ["Germany"]],
    ["Ghana", ["Ghana"]],
    ["Gibraltar", ["Gibraltar"]],
    ["Greece", ["Greece"]],
    ["Greenland", ["Greenland"]],
    ["Grenada", ["Grenada"]],
    ["Guam", ["Guam"]],
    ["Guatemala", ["Guatemala"]],
    ["Guernsey", ["Guernsey"]],
    ["Guinea", ["Guinea"]],
    ["Guinea-Bissau", ["Guinea-Bissau"]],
    ["Guyana", ["Guyana"]],
    ["Haiti", ["Haiti"]],
    ["Vatican City", ["Vatican City", "Holy See"]],
    ["Honduras", ["Honduras"]],
    ["Hong Kong", ["Hong Kong"]],
    ["Hungary", ["Hungary"]],
    ["Iceland", ["Iceland"]],
    ["India", ["India"]],
    ["Indonesia", ["Indonesia"]],
    ["Iran", ["Iran"]],
    ["Iraq", ["Iraq"]],
    ["Ireland", ["Ireland"]],
    ["Isle of Man", ["Isle of Man", "IOM"]],
    ["Israel", ["Israel"]],
    ["Italy", ["Italy"]],
    ["Jamaica", ["Jamaica"]],
    ["Japan", ["Japan"]],
    ["Jersey", ["Jersey"]],
    ["Jordan", ["Jordan"]],
    ["Kazakhstan", ["Kazakhstan"]],
    ["Kenya", ["Kenya"]],
    ["Kiribati", ["Kiribati"]],
    ["Kuwait", ["Kuwait"]],
    ["Kyrgyzstan", ["Kyrgyzstan"]],
    ["Laos", ["Laos"]],
    ["Latvia", ["Latvia"]],
    ["Lebanon", ["Lebanon"]],
    ["Lesotho", ["Lesotho"]],
    ["Liberia", ["Liberia"]],
    ["Libya", ["Libya"]],
    ["Liechtenstein", ["Liechtenstein"]],
    ["Lithuania", ["Lithuania"]],
    ["Luxembourg", ["Luxembourg"]],
    ["Macau", ["Macau"]],
    ["Madagascar", ["Madagascar"]],
    ["Malawi", ["Malawi"]],
    ["Malaysia", ["Malaysia"]],
    ["Maldives", ["Maldives"]],
    ["Mali", ["Mali"]],
    ["Malta", ["Malta"]],
    ["Marshall Islands", ["Marshall Islands", "Marshall"]],
    ["Martinique", ["Martinique"]],
    ["Mauritania", ["Mauritania"]],
    ["Mauritius", ["Mauritius"]],
    ["Mexico", ["Mexico"]],
    ["Moldova", ["Moldova"]],
    ["Monaco", ["Monaco"]],
    ["Mongolia", ["Mongolia"]],
    ["Montenegro", ["Montenegro"]],
    ["Montserrat", ["Montserrat"]],
    ["Morocco", ["Morocco"]],
    ["Mozambique", ["Mozambique"]],
    ["Myanmar", ["Myanmar", "Burma"]],
    ["Namibia", ["Namibia"]],
    ["Nauru", ["Nauru"]],
    ["Nepal", ["Nepal"]],
    ["Netherlands", ["Netherlands"]],
    ["New Caledonia", ["New Caledonia", "Caledonia"]],
    ["New Zealand", ["New Zealand"]],
    ["Nicaragua", ["Nicaragua"]],
    ["Niger", ["Niger"]],
    ["Nigeria", ["Nigeria"]],
    ["Niue", ["Niue"]],
    ["Norfolk Island", ["Norfolk Island", "Norfolk"]],
    ["North Korea", ["North Korea"]],
    ["North Macedonia", ["North Macedonia"]],
    ["Northern Mariana Islands", ["Northern Mariana Islands", "Mariana", "Mariana Islands", "Northern Mariana"]],
    ["Norway", ["Norway"]],
    ["Oman", ["Oman"]],
    ["Pakistan", ["Pakistan"]],
    ["Palau", ["Palau"]],
    ["Panama", ["Panama"]],
    ["Papua New Guinea", ["Papua New Guinea", "PNG", "Papua", "New Guinea"]],
    ["Paraguay", ["Paraguay"]],
    ["Peru", ["Peru"]],
    ["Philippines", ["Philippines"]],
    ["Pitcairn", ["Pitcairn", "Pitcairn Islands"]],
    ["Poland", ["Poland"]],
    ["Portugal", ["Portugal"]],
    ["Puerto Rico", ["Puerto Rico"]],
    ["Qatar", ["Qatar"]],
    ["Republic of the Congo", ["Republic of the Congo", "Congo-Brazzaville", "Congo"]],
    ["Romania", ["Romania"]],
    ["Russia", ["Russia"]],
    ["Rwanda", ["Rwanda"]],
    ["Saint Kitts and Nevis", ["Saint Kitts and Nevis", "Saint Kitts", "St Kitts"]],
    ["Saint Lucia", ["Saint Lucia"]],
    ["Saint Vincent and the Grenadines", ["Saint Vincent and the Grenadines", "Saint Vincent", "St Vincent"]],
    ["Samoa", ["Samoa"]],
    ["San Marino", ["San Marino"]],
    ["Saudi Arabia", ["Saudi Arabia"]],
    ["Senegal", ["Senegal"]],
    ["Serbia", ["Serbia"]],
    ["Seychelles", ["Seychelles"]],
    ["Sierra Leone", ["Sierra Leone"]],
    ["Singapore", ["Singapore"]],
    ["Sint Maarten", ["Sint Maarten", "Saint Martin"]],
    ["Slovakia", ["Slovakia"]],
    ["Slovenia", ["Slovenia"]],
    ["Solomon Islands", ["Solomon Islands"]],
    ["Somalia", ["Somalia"]],
    ["South Africa", ["South Africa"]],
    ["South Georgia and the South Sandwich Islands", ["South Georgia and the South Sandwich Islands", "South Georga", "South Sandwich"]],
    ["South Korea", ["South Korea"]],
    ["South Sudan", ["South Sudan"]],
    ["Spain", ["Spain"]],
    ["Sri Lanka", ["Sri Lanka"]],
    ["Palestine", ["Palestine"]],
    ["Sudan", ["Sudan"]],
    ["Suriname", ["Suriname"]],
    ["Sweden", ["Sweden"]],
    ["Switzerland", ["Switzerland"]],
    ["Syria", ["Syria"]],
    ["Taiwan", ["Taiwan"]],
    ["Tajikistan", ["Tajikistan"]],
    ["Tanzania", ["Tanzania"]],
    ["Thailand", ["Thailand"]],
    ["Timor-Leste", ["Timor-Leste", "East Timor"]],
    ["Togo", ["Togo"]],
    ["Tokelau", ["Tokelau"]],
    ["Tonga", ["Tonga"]],
    ["Trinidad and Tobago", ["Trinidad and Tobago", "Trinidad", "Tobago"]],
    ["Tunisia", ["Tunisia"]],
    ["Turkmenistan", ["Turkmenistan"]],
    ["Turks and Caicos Islands", ["Turks and Caicos Islands", "Turks", "Caicos", "Turks and Caicos"]],
    ["Tuvalu", ["Tuvalu"]],
    ["Turkiye", ["Turkiye", "Turkey"]],
    ["Uganda", ["Uganda"]],
    ["Ukraine", ["Ukraine"]],
    ["United Arab Emirates", ["United Arab Emirates", "UAE"]],
    ["United Kingdom", ["United Kingdom", "UK", "Great Britain"]],
    ["United States", ["United States", "US", "USA", "America"]],
    ["Uruguay", ["Uruguay"]],
    ["Uzbekistan", ["Uzbekistan"]],
    ["Vanuatu", ["Vanuatu"]],
    ["Venezuela", ["Venezuela"]],
    ["Vietnam", ["Vietnam"]],
    ["British Virgin Islands", ["British Virgin Islands", "Virgin Islands", "BVI", "UK Virgin Islands"]],
    ["American Virgin Islands", ["American Virgin Islands", "Virgin Islands", "AVI", "US Virgin Islands"]],
    ["Western Sahara", ["Western Sahara"]],
    ["Yemen", ["Yemen"]],
    ["Zambia", ["Zambia"]],
    ["Zimbabwe", ["Zimbabwe"]],
    ["Ascension Island", ["Ascension Island"]],
    ["Association of Southeast Asian Nations", ["Association of Southeast Asian Nations", "ASEAN"]],
    ["Basque Country", ["Basque Country"]],
    ["Canary Islands", ["Canary Islands", "Canary"]],
    ["Catalonia", ["Catalonia"]],
    ["Central European Free Trade Agreement", ["Central European Free Trade Agreement", "CEFTA"]],
    ["Diego Garcia", ["Diego Garcia"]],
    ["East African Community", ["East African Community", "EAC"]],
    ["England", ["England"]],
    ["European Union", ["European Union", "EU"]],
    ["Galicia", ["Galicia"]],
    ["Kosovo", ["Kosovo"]],
    ["League of Arab States", ["League of Arab States"]],
    ["Northern Ireland", ["Northern Ireland"]],
    ["Pacific Community", ["Pacific Community"]],
    ["Saint Helena", ["Saint Helena"]],
    ["Scotland", ["Scotland"]],
    ["Tristan da Cunha", ["Tristan da Cunha"]],
    ["United Nations", ["United Nations", "UN"]],
    ["Wales", ["Wales"]]
]);