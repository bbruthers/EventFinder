<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="MapPage.aspx.cs" Inherits="EventFinder.MapPage" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <link href="Content/bootstrap.min.css" rel="stylesheet" />
    <link href="Content/site.css" rel="stylesheet" />
    <script src="Scripts/jquery-3.1.1.js"></script>
    <script src="Scripts/bootstrap.min.js"></script>
    <script src="Scripts/map.js"></script>
    <script async src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC72GyDR9YJ8Rs4x0URTiEuf1dehhHSyro&callback=initMap"></script>

    <title>Title</title>
</head>
<body>
    <div class="container">
        <form id="form1" runat="server">
            <header>Header text</header>
            <div class="jumbotron">
                <div id="map"></div>
            </div>

            <div id="lat">
                Latitude: Null
            </div>
            <div id="lng">
                Longitude: Null
            </div>
        </form>
    </div>
</body>
</html>
