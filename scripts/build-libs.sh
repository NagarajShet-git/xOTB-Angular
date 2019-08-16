# Library should be build in order 
# Build independent ones first
# then their dependent

ng build xotb-theme

ng build utility

ng build shared-lib

ng build tooltips

ng build icons

ng build forms 

ng build input 

ng build ng-xotb