source('./r_files/flatten_HTML.r')

############### Library Declarations ###############
libraryRequireInstall("ggplot2");
libraryRequireInstall("plotly")
libraryRequireInstall("dplyr")
libraryRequireInstall("viridis")
libraryRequireInstall("hrbrthemes")
####################################################

################### Actual code ####################
 # The dataset is provided in the gapminder library
 
 Values$CloseTDdate = as.Date(dataset$CloseTDdate)
 
 data = Values
 
 # Interactive version
g = data %>%
   
   # prepare text for tooltip
   mutate(text = paste("Name: ", Name, "\nValue: ", HighLowAvg, "Close Date/TD: ", CloseTDdate, sep="")) %>%
   
   # Classic ggplot
   ggplot( aes(x=CloseTDdate, y=Priority, size = HighLowAvg, color = Priority, text=text)) +
     geom_point(alpha=0.7) +
     scale_size(range = c(1.5, 30), name="Value") +
     scale_color_viridis(discrete=FALSE, guide=FALSE) +
     theme_ipsum() +
     theme(legend.position="none")
####################################################

############# Create and save widget ###############
p = ggplotly(g, tooltip=text);
internalSaveWidget(p, 'out.html');
####################################################
