rawdata <- read.csv("SchichDataS1_FB.csv",header = T,sep=";")
migrate <- rawdata[,c(6,7,11,12)]
names(migrate) <- c("birthlat","birthlon","deathlat","deathlon")

sink("migration.js")
cat("var flights = [")
cat("\n\t")
for(i in 1:nrow(migrate)){
  cat("[")
  cat(migrate$birthlat[i])
  cat(",")
  cat(migrate$birthlon[i])
  cat(",")
  cat(migrate$deathlat[i])
  cat(",")
  cat(migrate$deathlon[i])
  cat("]")
  if(i != nrow(migrate)){
    cat(",\n")
  }
}
cat("\n]")
sink()

write.csv(migrate,"migrate_FB.csv")






























































































