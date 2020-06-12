import 'package:my_app/environment.dart';
import 'package:my_app/main_common.dart';

Future<void> main() async {
  await mainCommon(Environment.prod);
}
