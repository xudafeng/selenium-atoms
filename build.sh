echo building...
mkdir atoms
SELENIUM_PATH=$1
SELENIUM_ATOMS_PATH=$PWD
if [ -d $SELENIUM_PATH ];
then
  echo "selenium path set to $SELENIUM_PATH"
else
  echo "selenium path not exist"
fi
pushd "$SELENIUM_PATH"
./go clean
rm -rf ./javascript/selenium-atoms
mkdir ./javascript/selenium-atoms
cp $SELENIUM_ATOMS_PATH/build.desc ./javascript/selenium-atoms
./go //javascript/selenium-atoms:build --trace
find ./build/javascript/ -type f -name '*.js' ! -name "*_exports.js" -print | xargs -I {} cp {} $SELENIUM_ATOMS_PATH/atoms
popd
echo atoms build success!
