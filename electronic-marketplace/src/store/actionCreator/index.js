import * as UserActionCreators from "../state/actions/userActions";
import * as CategoryActionCreators from "../state/actions/categoryActions";
import * as ManufacturerActions from "../state/actions/manufacturerActions";
import * as RoleActions from "../state/actions/rolesActions";
import * as ProductsActions from "../state/actions/productActions";
import * as AppSettingActions from "../state/actions/appSettingActions";
import * as CartItemActions from "../state/actions/cartItemActions";
import * as FiltersActions from "../state/actions/filtersActions";

const actions = {
  ...UserActionCreators,
  ...CategoryActionCreators,
  ...ManufacturerActions,
  ...RoleActions,
  ...ProductsActions,
  ...AppSettingActions,
  ...CartItemActions,
  ...FiltersActions
};

export default actions;
