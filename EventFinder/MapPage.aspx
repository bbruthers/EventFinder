<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="MapPage.aspx.cs" Inherits="EventFinder.MapPage" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link href="Content/bootstrap.min.css" rel="stylesheet" />
    <link href="Content/site.css" rel="stylesheet" />
    <script src="Scripts/jquery-3.1.1.js"></script>
    <script src="Scripts/bootstrap.min.js"></script>
    <script src="Scripts/history.js"></script>
    <script src="Scripts/map.js"></script>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC72GyDR9YJ8Rs4x0URTiEuf1dehhHSyro&callback=initMap" async></script>

    <title>Title</title>
</head>
<body>

    <form id="form1" runat="server">
        <div class="container-fluid">
            <header>Header text</header>
            <div class="jumbotron">
                <div id="map"></div>
            </div>
            <div id="navLat">
                Nav Lat: 
            </div>
            <div id="navLng">
                Nav Lng: 
            </div>
            <div>
                <asp:HiddenField ID="hfLatitude" runat="server" OnValueChanged="hfLatitude_ValueChanged" />
                <asp:HiddenField ID="hfLongitude" runat="server" />
            </div>
            <div id="tablesec">
                <!-- map coordinates js generated table -->
            </div>
        </div>
    </form>
</body>
</html>
